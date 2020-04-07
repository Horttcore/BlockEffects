<?php
namespace RalfHortt\TranslatorService;

use RalfHortt\ServiceContracts\ServiceContract;

class Translator implements ServiceContract
{
    protected $textdomain;
    protected $translationPath;

    /**
     * Construct
     **/
    public function __construct(string $textdomain, string $translationPath)
    {
        $this->textdomain = $textdomain;
        $this->translationPath = $translationPath;
    }

    /**
     * Register in WordPress lifecycle
     **/
    public function register(): void
    {
        $this->loadTranslation();
    }

    /**
     * Load translation
     **/
    public function loadTranslation(): bool
    {
        return \load_plugin_textdomain($this->getTextdomain(), false, $this->getTranslationPath());
    }

    /**
     * Get textdomain
     **/
    public function getTextdomain(): string
    {
        return $this->textdomain;
    }

    /**
     * Get textdomain
     **/
    public function getTranslationPath(): string
    {
        return $this->translationPath;
    }
}
