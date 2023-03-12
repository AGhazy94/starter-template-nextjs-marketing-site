import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      36.82% 36.82% at 50% 50%,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0) 50%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  z-index: 3;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.5) 1.5px,
      transparent 1.5px
    );
    mask-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.24) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
    background-size: 32px 32px;
    background-repeat: round;
    z-index: 2;
    pointer-events: none;
  }
`;

const Silver = css`
  &:after {
    background-image: radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.5) 2px,
      transparent 2px
    );
    background-size: 48px 48px;
  }
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompHeroSliderSlideBackdrop = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
