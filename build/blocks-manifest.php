<?php
// This file is generated. Do not modify it manually.
return array(
	'container' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wolf/container',
		'version' => '0.1.0',
		'title' => 'Container',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'wolf',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'topStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bottomStyle' => array(
				'type' => 'string',
				'default' => 'none'
			)
		)
	),
	'section' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wolf/section',
		'version' => '0.1.0',
		'title' => 'Section',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'wolf',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'headingTitle' => array(
				'type' => 'string',
				'default' => 'Section Heading'
			),
			'headingSubtitle' => array(
				'type' => 'string',
				'default' => 'This is a subtitle'
			),
			'headingAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'headingTitleColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'headingSubtitleColor' => array(
				'type' => 'string',
				'default' => '#666666'
			)
		)
	)
);
