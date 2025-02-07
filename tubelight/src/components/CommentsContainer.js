import React from 'react'

const CommentsContainer = () => {
  const comments = [
    {
      id: 1,
      author: "Alice",
      content: "This is Alice's comment.",
      replies: [
        {
          id: 2,
          author: "Bob",
          content: "Reply to Alice.",
          replies: [
            { id: 3, author: "Charlie", content: "Reply to Bob.", replies: [] },
            { id: 4, author: "David", content: "Another reply to Bob.", replies: [] }
          ]
        },
        {
          id: 5,
          author: "Emma",
          content: "Another reply to Alice.",
          replies: [
            { id: 6, author: "Frank", content: "Reply to Emma.", replies: [] },
            { id: 7, author: "Grace", content: "Another reply to Emma.", replies: [] },
            { id: 8, author: "Henry", content: "Adding thoughts.", replies: [] }
          ]
        }
      ]
    },
    {
      id: 9,
      author: "Isabella",
      content: "Isabella shares her thoughts.",
      replies: [
        {
          id: 10,
          author: "Jack",
          content: "Replying to Isabella.",
          replies: [
            { id: 11, author: "Katie", content: "Agreeing with Jack.", replies: [] },
            { id: 12, author: "Leo", content: "Different perspective.", replies: [] }
          ]
        },
        {
          id: 13,
          author: "Mike",
          content: "Different take.",
          replies: [
            { id: 14, author: "Nancy", content: "Good point!", replies: [] },
            { id: 15, author: "Oliver", content: "Adding more.", replies: [] },
            { id: 16, author: "Paul", content: "Another thought.", replies: [] }
          ]
        }
      ]
    },
    {
      id: 17,
      author: "Quinn",
      content: "Quinn jumps in.",
      replies: [
        {
          id: 18,
          author: "Rachel",
          content: "Replying to Quinn.",
          replies: [
            { id: 19, author: "Sam", content: "This makes sense.", replies: [] },
            { id: 20, author: "Tom", content: "Interesting point.", replies: [] }
          ]
        },
        {
          id: 21,
          author: "Uma",
          content: "Another reply to Quinn.",
          replies: [
            { id: 22, author: "Victor", content: "Nice take.", replies: [] },
            { id: 23, author: "Wendy", content: "Following up.", replies: [] },
            { id: 24, author: "Xavier", content: "Expanding on this.", replies: [] }
          ]
        }
      ]
    },
    {
      id: 25,
      author: "Yara",
      content: "Yara gives her opinion.",
      replies: [
        {
          id: 26,
          author: "Zane",
          content: "I see what you mean.",
          replies: [
            { id: 27, author: "Alice", content: "Good insight.", replies: [] },
            { id: 28, author: "Bob", content: "Well explained.", replies: [] },
            { id: 29, author: "Charlie", content: "Another thought.", replies: [] }
          ]
        }
      ]
    },
    {
      id: 30,
      author: "David",
      content: "David shares his insights.",
      replies: [
        {
          id: 31,
          author: "Emma",
          content: "Following up on David.",
          replies: [
            { id: 32, author: "Frank", content: "Agreeing here.", replies: [] },
            { id: 33, author: "Grace", content: "Adding more details.", replies: [] }
          ]
        },
        {
          id: 34,
          author: "Henry",
          content: "Expanding on this.",
          replies: [
            { id: 35, author: "Isabella", content: "Well put.", replies: [] },
            { id: 36, author: "Jack", content: "More thoughts.", replies: [] },
            { id: 37, author: "Katie", content: "Agreeing with this.", replies: [] }
          ]
        }
      ]
    },
    {
      id: 38,
      author: "Leo",
      content: "Leo jumps in with thoughts.",
      replies: [
        {
          id: 39,
          author: "Mike",
          content: "Good breakdown.",
          replies: [
            { id: 40, author: "Nancy", content: "Agreed!", replies: [] },
            { id: 41, author: "Oliver", content: "I see your point.", replies: [] }
          ]
        },
        {
          id: 42,
          author: "Paul",
          content: "Interesting viewpoint.",
          replies: [
            { id: 43, author: "Quinn", content: "Another take on this.", replies: [] },
            { id: 44, author: "Rachel", content: "I hadn't considered that.", replies: [] },
            { id: 45, author: "Sam", content: "Great perspective.", replies: [] }
          ]
        }
      ]
    },
    {
      id: 46,
      author: "Tom",
      content: "Tom enters the discussion.",
      replies: [
        {
          id: 47,
          author: "Uma",
          content: "Nice insights, Tom.",
          replies: [
            { id: 48, author: "Victor", content: "I second this.", replies: [] },
            { id: 49, author: "Wendy", content: "Elaborate more?", replies: [] }
          ]
        },
        {
          id: 50,
          author: "Xavier",
          content: "A different perspective.",
          replies: [
            { id: 51, author: "Yara", content: "Interesting!", replies: [] },
            { id: 52, author: "Zane", content: "I disagree slightly.", replies: [] },
            { id: 53, author: "Alice", content: "Could you expand?", replies: [] }
          ]
        }
      ]
    },
    {
      id: 54,
      author: "Bob",
      content: "Bob gives another opinion.",
      replies: [
        {
          id: 55,
          author: "Charlie",
          content: "Good thought!",
          replies: [
            { id: 56, author: "David", content: "I support this.", replies: [] },
            { id: 57, author: "Emma", content: "Well structured point.", replies: [] }
          ]
        },
        {
          id: 58,
          author: "Frank",
          content: "I see where you're coming from.",
          replies: [
            { id: 59, author: "Grace", content: "Let's discuss more.", replies: [] },
            { id: 60, author: "Henry", content: "This is valid.", replies: [] },
            { id: 61, author: "Isabella", content: "Agreeing here.", replies: [] }
          ]
        }
      ]
    }
  ];
const totalComments=()=>{
  let count=0;
 for (const comment of comments){
    count++;
   if(comment.replies.length>0){
     count+=totalComments(comment.replies);
   }
 }
  return count;
}
const Comment =({comment})=>{
  return(
    <div> {totalComments} Comments
    <div className='flex m-3 shadow-md p-3' >
      <div><img className='w-8 h-8 mt-2 mr-4' src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png' alt='user'/></div>
      <div> <h1>{comment.author}</h1>
      <h2>{comment.content}</h2></div>
    </div>
    </div>
  )
}

  const CommentsList =({comments})=>{
     return(
      comments.map(comment=>
        <div>
      <Comment key={comment.id} comment={comment} />
      <div className='ml-8'>
      <CommentsList comments={comment.replies} />
      </div>
      </div>)
      
     )
  }
  return <CommentsList comments={comments} />
  
}

export default CommentsContainer;