import React from "react";
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon, EmailShareButton, EmailIcon } from 'react-share';

function SocialMediaShare({shareUrl, shareMessage}) {
  return (
    <div>
      <div className="share-buttons">
        <FacebookShareButton url={shareUrl} quote={shareMessage}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={shareMessage}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={shareMessage}>
            <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <LinkedinShareButton url={shareUrl} summary={shareMessage}>
            <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton url={shareUrl} subject={shareMessage} body={shareMessage}>
            <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    </div>
  );
}

export default SocialMediaShare;