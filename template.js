// testing to see if the browser supports the HTML template element by checking
// for the presence of the template elements contenet attribute
if ('content' in document.createElement('template')) {

    const tbody = document.querySelector('tbody');
    const template = document.querySelector('#productrow');

    const clone = template.textContent.coloneNode(true);let td = close.querySelectorAll('td');
    td[0].textContent = 'Product 1';
    td[1].textContent = 'Description 1';

    tbody.appendChild(clone);

    const clone2 = template.textContent.cloneNode(true);
    td = clone2.querySelectorAll('td');
    td[0].textContent = 'Product 2';
    td[1].textContent = 'Description 2';
    
    tbody.appendChild(clone2);

} else { }

// teh template element in html is a mechanism for holding client side content that you dont want to be renedered when the page loads
// its often used when you want to define reusable chuncks of html that can later be inserted into the document using js
// the content inside a template tag is not displayed in the browser intially
// its useful for storing html structures that can be cloned and inserded dynamically
// the content is part of the documents dom, but not the rendered page until js is used to activate it

// ex
{/* <template id="card-tempate">
    <div class="card">
        <h2></h2>
        <p></p>
    </div>
</template>

<script> 
    const template = document.getElementById('card-template');
    const clone = template.content.cloneNode(true);

    clone.querySelector('h2').textContent = 'Card Title';
    clone.querySelector('p').textContent = 'Card description goes here.';
    document.body.appendChild(clone);
</script> */}