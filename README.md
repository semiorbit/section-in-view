# (jQuery) Section in View

A jQuery plugin that detects if a section is in viewport.
In the example below it detects if a section is in viewport and highlights 
section related link in navbar by section id.

## Usage


```javascript

$(document).ready(function () {
    
    $("section").sectionInView(
      function (sectionId) {
          // do something when section is in viewport
          // for exampe highlight related link in navbar            $('a[href$="'+sectionId+'"]').closest('li').addClass('active');

          $('a[href$="'+ sectionId +'"]').closest('li').addClass('active');
      },
      function (sectionId) {
          // do something when section is out of viewport
          // for exampe remove highlight on related link in navbar            $('a[href$="'+sectionId+'"]').closest('li').addClass('active');

          $('a[href$="'+ sectionId +'"]').closest('li').removeClass('active');
      },
        {
            offset: 200 // default
        }  
    );
    
});

```

```HTML
<body>
<nav>
    <menu>
        <li class="active">
            <a href="#home">Home</a>
        </li>
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#contacts">Contacts</a>
        </li>
    </menu>
</nav>

<main>
    <section id="home">
        .... some data (min height should be screen height)
    </section>
    <section id="about">
        .... some data (min height should be screen height)
    </section>
    <section id="contacts">
        .... some data (min height should be screen height)
    </section>
</main>
</body>
```

## Reference

| Parameter             | Description |
|-----------------------|-------------|
| funcInView(sectionId) | Fired when section is in viewport |
| funcOutOfView(sectionId) | Fired when section is out of viewport |
| Options | {offset: 200} A span to start considering section top is in view |

## License

MIT

by Semiorbit Solutions
