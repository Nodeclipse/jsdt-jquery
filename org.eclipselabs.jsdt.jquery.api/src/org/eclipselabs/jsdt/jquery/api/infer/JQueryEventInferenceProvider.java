package org.eclipselabs.jsdt.jquery.api.infer;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IWorkspaceRoot;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;
import org.eclipse.core.runtime.Platform;
import org.eclipse.wst.jsdt.core.IIncludePathEntry;
import org.eclipse.wst.jsdt.core.IJavaScriptProject;
import org.eclipse.wst.jsdt.core.IPackageFragmentRoot;
import org.eclipse.wst.jsdt.core.JavaScriptCore;
import org.eclipse.wst.jsdt.core.JavaScriptModelException;
import org.eclipse.wst.jsdt.core.infer.IInferEngine;
import org.eclipse.wst.jsdt.core.infer.IInferenceFile;
import org.eclipse.wst.jsdt.core.infer.InferrenceProvider;
import org.eclipse.wst.jsdt.core.infer.RefactoringSupport;
import org.eclipse.wst.jsdt.core.infer.ResolutionConfiguration;

public class JQueryEventInferenceProvider implements InferrenceProvider {

  private static final String ID = JQueryEventInferenceProvider.class.getName();

  private final JQueryCallbackMethods callbackMethods;

  public JQueryEventInferenceProvider() {
    this.callbackMethods = new JQueryCallbackMethodsGenerator().createCallbackMethods();
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public IInferEngine getInferEngine() {
    return new JQueryEventInferEngine(this.callbackMethods);
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public int applysTo(IInferenceFile scriptFile) {

      char[] fileName = scriptFile.getFileName();
      if (fileName == null) {
          return InferrenceProvider.NOT_THIS;
      }
      IPath path = new Path(new String(fileName));
      IWorkspaceRoot workspaceRoot = ResourcesPlugin.getWorkspace().getRoot();
      IResource member = workspaceRoot.findMember(path);
      if (member == null) {
          return InferrenceProvider.NOT_THIS;
      }
          
      IProject project = member.getProject();
      if (project == null) {
          return InferrenceProvider.NOT_THIS;
      }
      
      //Platform.getAdapterManager().getAdapter(project, IJavaScriptProject.class);
      IJavaScriptProject javaScriptProject = JavaScriptCore.create(project);
      try {
        IIncludePathEntry[] resolvedIncludepath = javaScriptProject.getResolvedIncludepath(true);
        IIncludePathEntry[] rawIncludepath = javaScriptProject.getRawIncludepath();
        if (rawIncludepath == null) {
            return InferrenceProvider.NOT_THIS;
        }
        for (IIncludePathEntry includePathEntry : rawIncludepath) {
            if (includePathEntry.getEntryKind() == IIncludePathEntry.CPE_CONTAINER
                    && includePathEntry.getContentKind() == IPackageFragmentRoot.K_SOURCE) {
                IPath includePath = includePathEntry.getPath();
            }
        }
    } catch (JavaScriptModelException e) {
        // TODO Auto-generated catch block
        return InferrenceProvider.NOT_THIS;
    }

      //FIXME
      return InferrenceProvider.MAYBE_THIS;
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public String getID() {
    return ID;
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public ResolutionConfiguration getResolutionConfiguration() {
    return new ResolutionConfiguration();
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public RefactoringSupport getRefactoringSupport() {
    return null;
  }

}
