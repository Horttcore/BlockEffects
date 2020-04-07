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
        add_action('admin_print_footer_scripts', [$this, 'enqueueConfig'], 999);
        add_action('wp_footer', [$this, 'enqueueConfig'], 999);
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
        wp_enqueue_script('block-effects-editor', plugins_url('/../dist/js/block-effects-editor.js', __FILE__), [], filemtime(plugin_dir_path(__FILE__) . '/../dist/js/block-effects-editor.js'), true);
        // wp_enqueue_style('block-effects-editor', plugins_url('/../dist/css/block-effects-editor.css', __FILE__), [], filemtime(plugin_dir_path(__FILE__) . '/../dist/css/block-effects-editor.css'));
    }


    /**
     * Enqueue assets in front- and backend
     * @return void
     * @todo Show effects in backend
     **/
    public function enqueueBlockAssets(): void
    {
        wp_enqueue_script('block-effects', plugins_url('/../dist/js/block-effects.js', __FILE__), [], filemtime(plugin_dir_path(__FILE__) . '/../dist/js/block-effects.js'), true);

        if (!is_admin()) {
            wp_enqueue_style('block-effects', plugins_url('/../dist/css/block-effects.css', __FILE__), [], filemtime(plugin_dir_path(__FILE__) . '/../dist/css/block-effects.css'));
        }
    }


    /**
     * Enqueue config
     *
     * @todo Load global configs
     * @return void
     **/
    public function enqueueConfig(): void
    {
        ?>
        <script>
            AOS.init({
                // Global settings:
                disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
                useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
                disableMutationObserver: false, // disables automatic mutations' detections (advanced)
                debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
                throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
                // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
                offset: 120, // offset (in px) from the original trigger point
                delay: 0, // values from 0 to 3000, with step 50ms
                duration: 400, // values from 0 to 3000, with step 50ms
                easing: 'ease', // default easing for AOS animations
                once: true, // whether animation should happen only once - while scrolling down
                mirror: false, // whether elements should animate out while scrolling past them
                anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
            });
        </script>
        <?php
    }
}
