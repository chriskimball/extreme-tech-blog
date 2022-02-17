
const commentFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();
    const postId = event.target.getAttribute('data-id');
    
    if (content && postId ) {
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify({ content, postId }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${postId}`);
      } else {
        alert(response.statusText);
      }
    }
  };

  
document.querySelector('#add-comment').addEventListener('submit', commentFormHandler);