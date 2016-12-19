/*  CMPE331 Term Project.
 *  Adem Aldemir, Enes Nehir Gürdamar, Emir Burak Selvi, Vehbi Çetin.
 *  Settings of Spring Framework and Servlet function.
 *  Created on 05.12.2016
 */

package com.CMPE331.servlet3;

import com.CMPE331.config.SpringWebConfig;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class BusWebInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[]{SpringWebConfig.class};
    }

    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }

    @Override
    protected Class<?>[] getRootConfigClasses() {
        return null;
    }

}
