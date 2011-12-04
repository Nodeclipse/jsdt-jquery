package org.eclipselabs.jsdt.jquery.api.infer;

import org.eclipse.wst.jsdt.core.infer.IInferEngine;
import org.eclipse.wst.jsdt.core.infer.IInferenceFile;
import org.eclipse.wst.jsdt.core.infer.InferrenceProvider;
import org.eclipse.wst.jsdt.core.infer.RefactoringSupport;
import org.eclipse.wst.jsdt.core.infer.ResolutionConfiguration;

public class JQueryEventInferenceProvider implements InferrenceProvider {
    
    private static final String ID = JQueryEventInferenceProvider.class.getName();

    @Override
    public IInferEngine getInferEngine() {
        return new JQueryEventInferEngine();
    }

    @Override
    public int applysTo(IInferenceFile scriptFile) {
        // TODO fix
        return InferrenceProvider.MAYBE_THIS;
    }

    @Override
    public String getID() {
        return ID;
    }

    @Override
    public ResolutionConfiguration getResolutionConfiguration() {
        return new ResolutionConfiguration();
    }

    @Override
    public RefactoringSupport getRefactoringSupport() {
        // TODO Auto-generated method stub
        return null;
    }

}
