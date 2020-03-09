tinymce.PluginManager.add('slider', function(editor, url) {
  var openDialog = function () {
    return editor.windowManager.open({
      title: 'Добавление мини-слайдера',
      body: {
        type: 'panel',
        items: [
          {
            type: 'input',
            name: 'name',
            label: 'Название мини-слайдера'
          }
        ]
      },
      buttons: [
        {
          type: 'submit',
          text: 'Сохранить',
          primary: true
        },
        {
          type: 'cancel',
          text: 'Закрыть'
        }
      ],
      onSubmit: function (api) {
        var data = api.getData();
        // Insert content when the window form is submitted
        editor.insertContent(`<div class="js-mini-slider" data-prefix="${data.name}">&nbsp;</div>
                                <div class="d-none">Здесь будет добавлен мини-слайдер с названием: ${data.name}</div><br/>`);
        api.close();
      }
    });
  };

  // Add a button that opens a window
  editor.ui.registry.addButton('slider', {
    text: 'Добавить мини слайдер',
    onAction: function () {
      // Open window
      openDialog();
    }
  });

  // Adds a menu item, which can then be included in any menu via the menu/menubar configuration
  editor.ui.registry.addMenuItem('slider', {
    text: 'плагин для добавления мини-слайдера',
    onAction: function() {
      // Open window
      openDialog();
    }
  });

  return {
    getMetadata: function () {
      return  {
        name: "Mini-slider plugin"
      };
    }
  };
});
