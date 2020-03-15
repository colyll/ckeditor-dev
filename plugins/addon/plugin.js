/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @file Image plugin
 */

CKEDITOR.plugins.add( 'addon',
{
	init : function( editor )
	{
		// Register the dialog.
		CKEDITOR.dialog.add('addon', this.path + 'dialogs/addon.js' );

		// Register the command.
		editor.addCommand('addon', new CKEDITOR.dialogCommand('addon') );

		// Register the toolbar button.
		editor.ui.addButton( 'addon',
			{
				label : '附件',
				command : 'addon'
			});
	}
} );
