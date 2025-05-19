<?php

namespace Horttcore\BlockEffects;

use Horttcore\BlockEffects\Interfaces\ServiceInterface;

class BlockEffects implements ServiceInterface
{
    /**
     * Register WordPress hooks
     *
     **/
    public function register(): void
    {
        add_action('enqueue_block_editor_assets', [$this, 'enqueueEditorAssets']);
        add_action('enqueue_block_assets', [$this, 'enqueueBlockAssets']);
    }


    /**
     * Enqueue backend assets
     *
     * @return void
     * @todo Show effects in backend
     **/
    public function enqueueEditorAssets(): void
    {
        wp_enqueue_script('block-effects-editor', plugins_url('../build/index.js', __FILE__), ['lodash'], filemtime(plugin_dir_path(__FILE__) . '../build/index.js'), true);
    }


    /**
     * Enqueue assets in front- and backend
     * @return void
     * @todo Show effects in backend
     **/
    public function enqueueBlockAssets(): void
    {
        wp_enqueue_script('aos', plugins_url('../build/aos.js', __FILE__), [], filemtime(plugin_dir_path(__FILE__) . '../build/aos.js'), true);

        if (!is_admin()) {
            wp_enqueue_style('aos', plugins_url('/../build/aos.css', __FILE__), [], filemtime(plugin_dir_path(__FILE__) . '/../build/aos.css'));
        }
    }
}
