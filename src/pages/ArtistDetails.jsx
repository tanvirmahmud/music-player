import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isplaying } = useSelector((state) => state.player);

  const {
    data: artistData,
    isFetching: isFetchingartistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  if (isFetchingartistDetails) {
    return <Loader title="Loading artist details" />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />

      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isplaying={isplaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
