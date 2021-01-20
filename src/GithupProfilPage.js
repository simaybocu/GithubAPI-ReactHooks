import React, { useState, useEffect } from "react";

function Profil() {
  const [userName, setUsername] = useState("Jesusbill");
  const [realName, setRealname] = useState("");
  const [avatar, setAvatar] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [followers, setFollowers] = useState("");
  const [url, setUrl] = useState("");

  const setData = ({
    name,
    login,
    avatar_url,
    location,
    public_repos,
    followers,
    html_url,
  }) => {
    setRealname(name);
    setUsername(login);
    setAvatar(avatar_url);
    setLocation(location);
    setRepos(public_repos);
    setFollowers(followers);
    setUrl(html_url);
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="card position-relative">
      <a href={url} target="_blank">
        <img
          className="avatar text-align-center position-absolute p-10  mw-100 d-block rounded-circle h-auto "
          src={avatar}
        />
      </a>
      <div className="card-body">
        <h2 className="card-username text-center">
          <a
            className="card-link text-uppercase mb-0 pb-0 "
            href={url}
            target="_blank"
          >
            {realName}
          </a>
        </h2>
      </div>

      <dl className="m-0 p-0">
        <dt>Kullanıcı Adı</dt>
        <dd>{userName}</dd>

        <dt>Lokasyon</dt>
        <dd>{location}</dd>

        <dt>Repo Sayısı</dt>
        <dd>{repos}</dd>

        <dt>Takipçi Sayısı</dt>
        <dd>{followers}</dd>
      </dl>
    </div>
  );
}

export default Profil;
