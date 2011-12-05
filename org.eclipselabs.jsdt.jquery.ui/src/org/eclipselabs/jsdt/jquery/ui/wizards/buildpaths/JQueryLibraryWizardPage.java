/*
 * *****************************************************************************
 * Copyright (c) 2011 Philippe Marschall and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Philippe Marschall
 * *****************************************************************************
 *
 */
package org.eclipselabs.jsdt.jquery.ui.wizards.buildpaths;

import java.util.List;

import org.eclipse.core.runtime.IPath;
import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.wst.jsdt.core.IIncludePathEntry;
import org.eclipse.wst.jsdt.core.IJavaScriptProject;
import org.eclipse.wst.jsdt.core.JavaScriptCore;
import org.eclipse.wst.jsdt.internal.ui.JavaPluginImages;
import org.eclipse.wst.jsdt.internal.ui.wizards.dialogfields.ComboDialogField;
import org.eclipse.wst.jsdt.internal.ui.wizards.dialogfields.DialogField;
import org.eclipse.wst.jsdt.internal.ui.wizards.dialogfields.IDialogFieldListener;
import org.eclipse.wst.jsdt.internal.ui.wizards.dialogfields.LayoutUtil;
import org.eclipse.wst.jsdt.internal.ui.wizards.dialogfields.SelectionButtonDialogField;
import org.eclipse.wst.jsdt.ui.wizards.IJsGlobalScopeContainerPage;
import org.eclipse.wst.jsdt.ui.wizards.IJsGlobalScopeContainerPageExtension;
import org.eclipse.wst.jsdt.ui.wizards.IJsGlobalScopeContainerPageExtension2;
import org.eclipse.wst.jsdt.ui.wizards.NewElementWizardPage;
import org.eclipselabs.jsdt.jquery.api.JQueryApiPlugin;
import org.eclipselabs.jsdt.jquery.api.JQueryContainer;
import org.eclipselabs.jsdt.jquery.api.Version;
import org.eclipselabs.jsdt.jquery.ui.JQueryUiMessages;

/**
 * Wizard page for adding jQuery library support to the project.
 */
public class JQueryLibraryWizardPage extends NewElementWizardPage implements IJsGlobalScopeContainerPage, IJsGlobalScopeContainerPageExtension, IJsGlobalScopeContainerPageExtension2 {

  private IIncludePathEntry selection;

  private boolean noConflict;

  private int versionIndex;

  private ComboDialogField versionField;

  private SelectionButtonDialogField noConflictField;


  public JQueryLibraryWizardPage() {
    super("jQueryBrowserLib"); //$NON-NLS-1$
    this.setTitle(JQueryUiMessages.jQueryLibraryWizardPage_title);
    this.setImageDescriptor(JavaPluginImages.DESC_WIZBAN_ADD_LIBRARY);
  }

  @Override
  public void createControl(Composite parent) {
    Composite composite = new Composite(parent, SWT.NONE);
    composite.setFont(parent.getFont());

    DialogField descriptionField = new DialogField();
    descriptionField.setLabelText(JQueryUiMessages.jQueryLibraryWizardPage_jQueryLibraryAdded);

    this.versionField = new ComboDialogField(SWT.READ_ONLY);
    this.versionField.setLabelText(JQueryUiMessages.jQueryLibraryWizardPage_version);
    this.versionField.setItems(this.getItems());
    this.versionField.setDialogFieldListener(new IDialogFieldListener() {
      @Override
      public void dialogFieldChanged(DialogField field) {
        JQueryLibraryWizardPage.this.versionIndex = ((ComboDialogField) field).getSelectionIndex();
      }

    });
    this.initVersion();

    this.noConflictField = new SelectionButtonDialogField(SWT.CHECK);
    this.noConflictField.setLabelText(JQueryUiMessages.jQueryLibraryWizardPage_noConflict);
    this.noConflictField.setDialogFieldListener(new IDialogFieldListener() {
      @Override
      public void dialogFieldChanged(DialogField field) {
        JQueryLibraryWizardPage.this.noConflict = ((SelectionButtonDialogField) field).isSelected();
      }
    });
    this.initNoConflict();

    LayoutUtil.doDefaultLayout(composite, new DialogField[]{descriptionField, this.versionField, this.noConflictField},
        false, SWT.DEFAULT, SWT.DEFAULT);
    Dialog.applyDialogFont(composite);
    this.setControl(composite);
    this.setDescription(JQueryUiMessages.jQueryLibraryWizardPage_BrowserSupport);
  }

  private String[] getItems() {
    List<Version> versions = this.getAllVersions();
    String[] items = new String[versions.size()];
    int i = 0;
    for (Version version : versions) {
      items[i++] = version.toString();
    }
    return items;
  }

  private List<Version> getAllVersions() {
    return JQueryApiPlugin.getJQuerySupport().getAllVersions();
  }

  private Version getVersion() {
    return this.getAllVersions().get(this.versionIndex);
  }

  @Override
  public IIncludePathEntry[] getNewContainers() {
    IPath includePath = JQueryContainer.createIncludePath(this.getVersion(), this.noConflict);
    IIncludePathEntry library = JavaScriptCore.newContainerEntry(includePath);
    return new IIncludePathEntry[]{library};
  }

  @Override
  public void initialize(IJavaScriptProject project, IIncludePathEntry[] currentEntries) {
    // initialize
    this.versionIndex = 0;
    this.setNoConflict(false);
    for (IIncludePathEntry entry : currentEntries) {
      IPath path = entry.getPath();
      if (JQueryContainer.isQueryContainer(path.toString())) {
        this.setVersion(JQueryContainer.extractVersion(path));
        this.setNoConflict(JQueryContainer.extractNoConflict(path));
      }
    }

  }

  private void initVersion() {
    this.versionField.selectItem(0);
  }

  private void initNoConflict() {
    this.noConflictField.setSelection(this.noConflict);
  }

  private void setVersion(Version version) {
    int i = 0;
    for (Version candidate : this.getAllVersions()) {
      if (candidate.equals(version)) {
        this.versionIndex = i;
        return;
      }
      i += 1;
    }
  }

  private void setNoConflict(boolean noConflict) {
    this.noConflict = noConflict;
  }

  @Override
  public boolean finish() {
    return true;
  }

  @Override
  public IIncludePathEntry getSelection() {
    return this.selection;
  }

  @Override
  public void setSelection(IIncludePathEntry containerEntry) {
    this.selection = containerEntry;
  }

}
