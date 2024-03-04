import {render, screen} from '@testing-library/react';
import App from './LandingPage/mainPage';
import Slider from "./scr1/UI/Slider";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

    <Slider/>

});
