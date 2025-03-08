    // İçeriği Gösterme ve Gizleme
    function toggleContent(contentId) {
        const content = document.getElementById(contentId);
        const readMore = content.querySelector('.badge');
        
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            readMore.innerText = 'Read Less';
        } else {
            content.style.display = 'none';
            readMore.innerText = 'Read More';
        }
    }

    // Yorumları Ekleme
    function addComment(inputId, commentsId) {
        const commentText = document.getElementById(inputId).value;

        if (commentText) {
            const commentList = document.getElementById(commentsId);
            const newComment = document.createElement('li');
            newComment.innerText = commentText;

            commentList.appendChild(newComment);
            document.getElementById(inputId).value = ''; // Yorum kutusunu temizle
        }
    }
