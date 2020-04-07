<?php
namespace RalfHortt\Plugin;

/**
 * Class PluginFactory
 *
 * @since   1.0.0
 *
 * @package RalfHortt\Plugin
 * @author  Ralf Hortt <me@horttcore.de>
 */
class PluginFactory
{


    /**
     * Create and return an instance of the plugin.
     *
     * @since 1.0.0
     * @return Plugin Plugin instance.
     */
    public static function create()
    {
        return new Plugin();
    }
}
