<?php

class wp_ng_theme {
    function enqueue_scripts(){
        wp_enqueue_style('bootstrapCSS','//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
                         array(), '1.0');
        
        wp_enqueue_script('angular-core',get_template_directory_uri().'/assets/js/angular/angular.min.js');
  
        //wp_enqueue_script('angular-route',get_template_directory_uri().'/assets/js/angular/angular-route.min.js');
        wp_enqueue_script('angular-route',get_template_directory_uri().'/assets/js/angular/angular-ui-router.js');
        wp_enqueue_script('angular-resource',get_template_directory_uri().'/assets/js/angular/angular-resource.min.js');
    /*    
        wp_enqueue_script('angular-resource','//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-resource.js',
                         array('angular-core'),'1.0',false);
        
        wp_enqueue_script('ui-router','//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.18/angular-ui-router.min.js',
                         array('angular-core'),'1.0',false);
     */   
        wp_enqueue_script('ngScripts', get_template_directory_uri().'/assets/js/angular-theme.js');
        
        wp_localize_script('ngScripts', 'appInfo', array(
            'api_url'            => rest_get_url_prefix(). '/wp/v2/',
            'template_directory' => get_template_directory_uri() . '/',
            'nonce'              => wp_create_nonce ('wp_rest'),
            'is_admin'           => current_user_can ('administrator')
        ));
                          
    }
}

$ngTheme = new wp_ng_theme();
add_action( 'wp_enqueue_scripts', array($ngTheme, 'enqueue_scripts'));
