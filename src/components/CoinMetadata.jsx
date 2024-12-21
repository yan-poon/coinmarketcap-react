import React from 'react';
import '../css/CoinMetadata.css'; 

const CoinMetadata = ({ coinMetadata }) => {

    const getHostName = (url) => {
        const urlObj = new URL(url);
        return urlObj.hostname;
    };

    return (
        <div>
            <h5>About {coinMetadata.name}</h5>
            <p>{coinMetadata.description}</p>
            <h5>How can I get the offical information of {coinMetadata.name}?</h5>
            <ul>
                {coinMetadata.urls.website.map((link) =>
                (<span className="url-item" key={link} style={{ cursor: 'pointer' }} onClick={() => window.open(link, '_blank')}>
                    {getHostName(link)}
                </span>)
                )}
            </ul>

            <h5>How can I get the update of {coinMetadata.name}?</h5>
            <ul>
                {coinMetadata.urls.announcement.map((link) =>
                (<span className="url-item" key={link} style={{ cursor: 'pointer' }} onClick={() => window.open(link, '_blank')}>
                    {getHostName(link)}
                </span>)
                )}
                {coinMetadata.urls.twitter.map((link) =>
                (<span className="url-item" key={link} style={{ cursor: 'pointer' }} onClick={() => window.open(link, '_blank')}>
                    {getHostName(link)}
                </span>)
                )}
            </ul>

            <h5>How can I check the transaction of {coinMetadata.name}?</h5>
            <ul>
                {coinMetadata.urls.explorer.map((link) =>
                (<span className="url-item" key={link} style={{ cursor: 'pointer' }} onClick={() => window.open(link, '_blank')}>
                    {getHostName(link)}
                </span>)
                )}
            </ul>

            {coinMetadata.urls.technical_doc ? (<div>
                <h5>Where can I get the technical documentation?</h5>
                    <ul>
                        {coinMetadata.urls.technical_doc.map((link) => (
                            <span className="url-item" key={link} style={{ cursor: 'pointer' }} onClick={() => window.open(link, '_blank')}>
                                {getHostName(link)}
                            </span>
                        ))}
                    </ul>
                </div>

                    
   
            ) : null}
        </div>
    );
};

export default CoinMetadata;