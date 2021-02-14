import {Composition} from 'remotion';
import {CoderOneLogo} from './CoderOneLogo';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="CoderOne-Logo"
				component={CoderOneLogo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
