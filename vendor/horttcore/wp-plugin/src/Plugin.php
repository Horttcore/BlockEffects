<?php
namespace Horttcore\Plugin;

/**
 * Class Plugin.
 *
 * Main plugin controller class that hooks the plugin's functionality into the WordPress request lifecycle.
 *
 * @since   1.0.0
 * @package Horttcore\Plugin
 * @author  Ralf Hortt <me@horttcore.de>
 */
class Plugin
{


    /**
     * Services
     * 
     * @since 1.0.0
     * @var array $services Registered services
     */
    protected $services = [];


    /**
     * Textdomain
     * 
     * @since 1.0.0
     * @var string $textdomain Textdomain
     */
    protected $textdomain = '';


    /**
     * Path to translation folder
     * 
     * @since 1.0.0
     * @var string $translationPath Path to translations
     */
    protected $translationPath = '';


    /**
     * Register the plugin with the WordPress system.
     *
     * @since 1.0.0
     * @return Plugin
     */
    public function boot()
    {
        add_action('plugins_loaded', [$this, 'registerServices']);
        add_action('plugins_loaded', [$this, 'loadTranslation']);

        return $this;
    }


    /**
     * Add service
     *
     * @param strong $class Class name
     * @return Plugin
     **/
    public function addService( string $class )
    {
        $this->services[] = $class;

        return $this;
    }


    /**
     * Get the list of services to register.
     *
     * @since 1.0.0
     *
     * @return array<string> Array of fully qualified class names.
     */
    private function getServices()
    {
        return $this->services;
    }


    /**
     * Register the individual services of this plugin.
     *
     * @since 1.0.0
     */
    public function registerServices()
    {
        $services = $this->getServices();
        array_walk($services, function ($service) {

            if ( !class_exists( $service ) || !method_exists( $service, 'register' ) )
                return;

                (new $service)->register();
        });
    }


    /**
     * Set a textdomain
     *
     * @param string $textdomain Textdomain
     * @param string $translationPath Path to translation folder
     * @return Plugin
     **/
    public function addTranslation(string $textdomain, $translationPath): Plugin
    {
        $this->textdomain = $textdomain;
        $this->translationPath = $translationPath;

        return $this;
    }


    /**
     * Load translation
     *
     * @return bool If translation is loaded
     **/
    public function loadTranslation()
    {
        return load_plugin_textdomain( $this->textdomain, false, $this->translationPath );
    }


}
