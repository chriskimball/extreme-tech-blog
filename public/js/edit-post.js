
const editPostHandler = async (event) => {
    event.preventDefault();
    
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    const id = event.target.getAttribute('data-id');
    
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ id, title, content}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
};

const deletePostHandler = async (event) => {
    event.preventDefault();
    console.log("Delete clicked")

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
    
        const response = await fetch(`/api/posts/${id}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to delete project');
        }
      }
    // const title = document.querySelector('#post-title').value.trim();
    // const content = document.querySelector('#post-content').value.trim();
  
    // if (title && content) {
    //   const response = await fetch('/api/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({ title, content}),
    //     headers: { 'Content-Type': 'application/json' },
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/dashboard');
    //   } else {
    //     alert(response.statusText);
    //   }
    // }
  };

  
document.querySelector('#edit-btn').addEventListener('click', editPostHandler);
document.querySelector('#delete-btn').addEventListener('click', deletePostHandler);
