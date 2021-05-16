import React from "react";
import config from "../../../content/trackmasters.config.json";

import "./AboutRacing.scss"
import KenBurnsSection from "../../common/KenBurnsSection";

import { useMediaQuery } from 'react-responsive';

export default function AboutRacing(props) {

	const isM = useMediaQuery({query: '(max-width: 960px)'})
	const isSM = useMediaQuery({query: '(max-width: 800px)'})

	const ratio = isM ? isSM ? 2 : 3 : 4;

	return (
		<KenBurnsSection id="AboutRacing" backgroundId={"AboutRacingBackground"} label={props.label}>
			<div className="uk-container uk-text-center uk-section uk-padding-remove-top">
				<div className="uk-grid uk-grid-large uk-child-width-1-1"
					 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
					 data-uk-grid="">
					<div className="uk-width-1-1">
						<p>{config.aboutRacing.text}</p>
					</div>
				</div>
				<ul className="uk-iconnav uk-margin-medium-top uk-align-center">
					<SocialIcon type="instagram" ratio={ratio} />
					<SocialIcon type="facebook" ratio={ratio} />
					<SocialIcon type="twitter" ratio={ratio} />
				</ul>
			</div>
		</KenBurnsSection>
	)
}

function SocialIcon(props) {

	function onClick() {
		UIkit.notification({message: 'Již brzy bude odkaz k dispozici...'});
	}

	return <li key={props.type} className="social-icon uk-padding-remove-left">
		{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
		<a uk-icon={`ratio: ${props.ratio}; icon: ${props.type}`} onClick={onClick}/>
	</li>;
}
