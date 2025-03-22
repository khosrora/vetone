import { toast } from "sonner";
import axios from "axios";

export async function getAddressWithLatLong({
  lat,
  long,
}: {
  lat: string | number;
  long: string | number;
}) {
  try {
    const res = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}`
    );
    return res.data;
  } catch (error) {
    toast.error("دوباره امتحان کنید");
  }
}
