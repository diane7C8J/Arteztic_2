import { useEffect } from 'react';

export default function DiscourseForum({thread = '1'}) {
  useEffect(() => {
    window.DiscourseEmbed = {
      discourseUrl: 'https://community.hicetnunc.xyz/',
      topicId: thread,
    };

    const d = document.createElement('script');
    d.type = 'text/javascript';
    d.async = true;
    d.src = window.DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
  }, [thread]);

  return (
    <div>
      <div id="discourse-comments"></div>
    </div>
  );
}