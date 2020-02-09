var xhr = new XMLHttpRequest();      

xhr.onload = function() {              
  var response = xhr.responseXML;                      
  var dogs = response.getElementsByTagName('dog'); 

  for (var i = 0; i < dogs.length; i++) {            
    var container, image, name;      
    container = document.createElement('div');         
    container.className = 'container';                      

    image = document.createElement('img');              
    image.setAttribute('src', getNodeValue(dogs[i], 'slika'));
    image.className = 'pas'; 
    container.appendChild(image);

    name = document.createElement('p');      
    name.appendChild(document.createTextNode(getNodeValue(dogs[i], 'name')));
    container.appendChild(name);
    document.getElementById('content').appendChild(container);
  }

  function getNodeValue(obj, tag) {                   
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
  }
};

xhr.open('GET', 'data/data.xml', true);            
xhr.send(null);                                    