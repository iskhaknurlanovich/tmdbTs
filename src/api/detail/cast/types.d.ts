import type { IActorsResponse } from "../../../types/schema";

namespace CAST {
  type GetActorsRes = {
    cast: {
      adult: boolean;
      cast_id: number;
      character: string;
      credit_id: string;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      order: number;
      original_name: string;
      popularity: number;
      profile_path: string;
    }[];
    id: number;
  };
  type GetActorsRes = void;
}
