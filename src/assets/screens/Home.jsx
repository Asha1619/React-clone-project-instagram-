import "../style/Home.css";

import post1 from "../images/post1.png";
import post2 from "../images/post2.jpg";
import post3 from "../images/post3.jpg";

import story1 from "../images/story1.jpg";
import story2 from "../images/story2.jpg";
import story3 from "../images/story3.jpg";

function Home() {

  const stories = [
    { id: 1, name: "asha_r", image: story1 },
    { id: 2, name: "dona_v", image: story2 },
    { id: 3, name: "anu_k", image: story3 }
  ];

  const posts = [
    {
      id: 1,
      username: "asha_r",
      profile: story1,
      image: post1,
      location: "switzerland,Europe",
      likes: "1,245",
      caption: "Weekend vibes ✨"
    },
    {
      id: 2,
      username: "dona_v",
      profile: story2,
      image: post2,
      location: "Thrissur, Kerala",
      likes: "2,578",
      caption: "Beautiful day 🌸"
    },
    {
      id: 3,
      username: "anu_k",
      profile: story3,
      image: post3,
      location: "Paris,England",
      likes: "1,564",
      caption: "Nature is amazing 🌿"
    }
  ];

  return (
    <div className="home-container">

      {/* Sidebar */}
      <div className="sidebar">

        <h2 className="logo">Instagram</h2>

        <ul>
          <li>🏠 Home</li>
          <li>🔍 Search</li>
          <li>🎬 Reels</li>
          <li>💬 Messages</li>
          <li>❤️ Notifications</li>
          <li>➕ Create</li>
          <li>👤 Profile</li>
        </ul>

      </div>

      
      <div className="feed">

        
        <div className="stories">

          {stories.map((story) => (
            <div className="story" key={story.id}>

              <img
                src={story.image}
                alt={story.name}
                className="story-image"
              />

              <p>{story.name}</p>

            </div>
          ))}

        </div>

        
        {posts.map((post) => (
          <div className="post" key={post.id}>

            <div className="post-header">

              <img
                src={post.profile}
                alt={post.username}
                className="profile-pic"
              />

              <div className="user-info">
                <h4>{post.username}</h4>
                <p>{post.location}</p>
              </div>

            </div>

            <img
              src={post.image}
              alt={post.username}
              className="post-image"
            />

            <div className="post-actions">
              ❤️ 💬 📤 🔖
            </div>

            <p className="likes">
              {post.likes} likes
            </p>

            <p className="caption">
              <strong>{post.username}</strong> {post.caption}
            </p>

          </div>
        ))}

      </div>

      {/* Suggestions */}
      <div className="suggestions">

        <div className="profile-card">

          <img
            src={story1}
            alt="profile"
            className="profile-pic"
          />

          <div>
            <strong>asha_r</strong>
            <p>Frontend Developer</p>
          </div>
          <br/>

        </div>

        <h4>Suggestions for you</h4>

        <div className="suggestion">
          <span>ananya</span>
          <button>Follow</button>
        </div>

        <div className="suggestion">
          <span>john_doe</span>
          <button>Follow</button>
        </div>

        <div className="suggestion">
          <span>travel_world</span>
          <button>Follow</button>
        </div>

      </div>

    </div>
  );
}

export default Home;