var publications = [];

function publishPhoto(){
    var inName, inDesc, inUrl;
    inName = document.getElementById('nameInput');
    inDesc = document.getElementById('descriptionInput');
    inUrl = document.getElementById('imageInput');
    if(inName.value == "" || inDesc.value == "" || inUrl.value == ""){
        document.getElementById('msg').innerHTML = "Rellene todos los campos.";
    }else{
        var date = new Date();
        var newObj = {
            id: publications.length + 1,
            name: inName.value,
            description: inDesc.value,
            imageUrl: inUrl.value,
            date: date.getDay() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(),
            comments: []
        }
        publications.push(newObj);
        var publicationList = document.getElementById('publication-list');
        var node = document.createElement('div'),
            img = document.createElement('img'), 
            nameLabel = document.createElement('span'),
            descLabel = document.createElement('span'),
            dateLabel = document.createElement('span'),
            pubButton = document.createElement('button'),
            comments = document.createElement('div'),
            commentMsg = document.createElement('input'),
            commentBtn = document.createElement('button');
        
        node.classList.add('publication');
        node.id = 'publication-'+newObj.id;
        img.classList.add('publication-img');
        img.src = newObj.imageUrl;
        nameLabel.classList.add('publication-name');
        nameLabel.appendChild(document.createTextNode(newObj.name));
        descLabel.classList.add('publication-desc');
        descLabel.appendChild(document.createTextNode(newObj.description));
        dateLabel.classList.add('publication-date');
        dateLabel.appendChild(document.createTextNode(newObj.date));
        pubButton.classList.add('publication-button');
        pubButton.appendChild(document.createTextNode('Comentarios ('+newObj.comments.length+')'));
        comments.classList.add('comments-section', 'hidden');
        commentMsg.placeholder = 'Ingresa un comentario';
        commentBtn.appendChild(document.createTextNode('Enviar'));
        comments.appendChild(commentMsg);
        comments.appendChild(commentBtn);
        node.appendChild(img);
        node.appendChild(pubButton);
        node.appendChild(nameLabel);
        node.appendChild(descLabel);
        node.appendChild(dateLabel);
        node.appendChild(comments);
        publicationList.appendChild(node);
        pubButton.onclick = function() {
            showComments(newObj);
        }
        commentBtn.onclick = function() {
            addComment(newObj);
        }

        inName.value = inDesc.value = inUrl.value = '';
    }
}

function showComments(obj){
    var publication = document.getElementById('publication-'+obj.id),
        el = publication.getElementsByClassName('comments-section')[0];
    if(el.classList.contains('hidden')){
        el.classList.remove('hidden');
    }else {
        el.classList.add('hidden');
    }
}

function addComment(obj) {
    var publication = document.getElementById('publication-'+obj.id),
        commentBtn = publication.getElementsByClassName('publication-button')[0],
        commentSection = publication.getElementsByClassName('comments-section')[0],
        msg = commentSection.getElementsByTagName('input')[0],
        date = new Date(),
        commentInfo = {
            id: obj.comments.length + 1,
            comment: msg.value,
            date: date.getDay() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
        };
    obj.comments.push(commentInfo);
    msg.value = '';
    var finalComment = document.createElement('p');
    finalComment.appendChild(document.createTextNode(commentInfo.comment + ' - ' + commentInfo.date));
    commentSection.appendChild(finalComment);
    commentBtn.innerHTML = 'Comentarios ('+obj.comments.length+')';
    //console.log(obj);
}