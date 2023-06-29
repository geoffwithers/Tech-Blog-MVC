const newFormHandler = async (event) => {
    event.preventDefault();
  
    // const name = document.querySelector('#comment-area').value.trim();
    // const needed_funding = document.querySelector('#project-funding').value.trim();
    const comment = document.querySelector('#comment-text').value.trim();
    const post_id = event.target.getAttribute('data-id');

    if (comment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log(id)

      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete comment');
      }
    }
  };

  
  document
    .querySelector('#comment-form')
    .addEventListener('submit', newFormHandler);
  
    document
    .querySelector('.comment-list')
    .addEventListener('click', delButtonHandler);
  