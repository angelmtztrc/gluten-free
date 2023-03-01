export const KIND = {
  FREE: 'FREE',
  MAY_CONTAIN: 'MAY_CONTAIN',
  CONTAINS: 'CONTAINS'
} as const;

export type KIND = (typeof KIND)[keyof typeof KIND];
