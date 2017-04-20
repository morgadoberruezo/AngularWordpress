<!DOCTYPE html>
<html <?php language_attributes(); ?> ng-app="wpAngularTheme">
<head>
    <title><?php bloginfo('name') ?></title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="<?php bloginfo('stylesheet-utl') ?>" type="text/css"  media = "screen">
    <?php wp_head(); ?>
</head>
<body <?php body_class() ?>>
    <header class="container header" >
        <div class="row">
            <div class="col-sm-7">
                <h1>
                   <!-- que se valla a la ruta list de Angular -->
                    <a ui-sref="list"><?php echo bloginfo('name') ?></a>
                </h1>
            </div>
            <div class="col-sm-4 col-sm-offset-1">
                <span>por: morgado</span>
            </div>
        </div> 
        
    </header>
    
   <div class="container-luid content-wrapper">
       <div class="container">