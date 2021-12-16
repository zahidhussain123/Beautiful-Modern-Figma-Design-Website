import "./brand.css"
import { google, slack, atlassian, dropbox, shopify } from './imports';
const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img src={google} alt ="brand" />
            </div>
            <div>
                <img src={slack} alt ="brand" />
            </div>
            <div>
                <img src={atlassian} alt ="brand" />
            </div>
            <div>
                <img src={dropbox} alt ="brand" />
            </div>
            <div>
                <img src={shopify} alt ="brand" />
            </div>
        </div>
    )
}

export default Brand;
