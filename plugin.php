<?php
/**
 * Plugin Name: Gutenberg Animate On Scroll
 * Plugin URI: https://horttcore.de
 * Description: Add aos.js animations to gutenberg blocks
 * Version: 1.0.0
 * Author: Ralf Hortt
 * Author URI: https://horttcore.de
 * Text Domain: gutenberg-animate-on-scroll
 * Domain Path: /languages/
 * License: GPL3 or later
 */

namespace Horttcore\GutenbergAnimateOnScroll;

use Horttcore\Plugin\PluginFactory;
use Horttcore\GutenbergAnimateOnScroll\Gutenberg;

PluginFactory::create()
    ->addTranslation($textdomain, $pathToDirectory)
    ->addService(Block::class)
    ->boot();
