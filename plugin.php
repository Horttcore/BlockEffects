<?php
/**
 * Plugin Name: Block effects
 * Plugin URI: https://horttcore.de
 * Description: Add aos.js animations to gutenberg blocks
 * Version: 1.0.0
 * Author: Ralf Hortt
 * Author URI: https://horttcore.de
 * Text Domain: block-effects
 * Domain Path: /languages/
 * License: GPL3 or later
 */

namespace Horttcore\BlockEffects;

use RalfHortt\Plugin\PluginFactory;
use RalfHortt\TranslatorService\Translator;

# ------------------------------------------------------------------------------
# Autoloader
# ------------------------------------------------------------------------------
#
# Load composer autoloader file
$autoloader = dirname(__FILE__) . '/vendor/autoload.php';

if (is_readable($autoloader)):
    require_once $autoloader;
endif;

if (!defined('WPINC')):
    die;
endif;

# ------------------------------------------------------------------------------
# Bootstrap
# ------------------------------------------------------------------------------
PluginFactory::create()
    ->addService(Translator::class, 'block-effects', dirname(plugin_basename(__FILE__)).'/languages/')
    ->addService(BlockEffects::class)
    ->boot();
