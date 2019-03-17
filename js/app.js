var publications = [];

function publishPhoto(){
    var inName, inDesc, inUrl;
    inName = document.getElementById('nameInput').value;
    inDesc = document.getElementById('descriptionInput').value;
    inUrl = document.getElementById('imageInput').value;
    if(inName == "" || inDesc == "" || inUrl == ""){
        document.getElementById('msg').innerHTML = "Rellene todos los campos.";
    }else{

        var newObj = {
            id: publications.length + 1,
            name: inName,
            description: inDesc,
            imageUrl: inUrl,
            comments: []
        }
        publications.push(newObj);
        var publicationList = document.getElementById('publication-list');
        var node = document.createElement('div'),
            img = document.createElement('img'), 
            nameLabel = document.createElement('span'),
            descLabel = document.createElement('span'),
            pubButton = document.createElement('button'),
            comments = document.createElement('div');
        
        node.classList.add('publication');
        img.classList.add('publication-img');
        img.src = newObj.imageUrl;
        nameLabel.classList.add('publication-name');
        nameLabel.appendChild(document.createTextNode(newObj.name));
        descLabel.classList.add('publication-desc');
        descLabel.appendChild(document.createTextNode(newObj.description));
        pubButton.classList.add('publication-button');
        pubButton.appendChild(document.createTextNode('Comentarios ('+newObj.comments.length+')'));
        comments.classList.add('comments-section');
        node.appendChild(img);
        node.appendChild(pubButton);
        node.appendChild(nameLabel);
        node.appendChild(descLabel);
        node.appendChild(comments);
        publicationList.appendChild(node);
    }
}