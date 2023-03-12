import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  margin-bottom: 16px;
`;

const Silver = css`
  margin-bottom: 64px;
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompGridFilter = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
