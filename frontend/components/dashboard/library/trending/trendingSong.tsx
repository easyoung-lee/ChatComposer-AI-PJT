import React, { useState } from "react";
import { AlbumCoverType } from "../../../../types/musics";

function TrendingSong({ song }: { song: AlbumCoverType }) {
  const {
    music_id: musicId,
    cover_source: coverSource,
    member: { nickname },
    title,
    is_my_favorite,
  } = song;

  //좋아요 표시
  const whiteHeart =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABJklEQVRIie3UTytEURjH8efaSLGYjSiSYmFjKQtWQrLlJfAavBSKrYV3wSuw8QIYI6UsiCbKx+aOjjFz5w5XWfjVqdP58/2e89zbifhPv8E0DlDHK65xiJlkzSyO8rnXfO0+pnvB1/Goc16wg9283ykPWCs6eTd4K295K8oDplrcgcSxFxHDPSqY5a0oIznrY0PrBvWImOixuWyusiybahc0I2KwIkEzy7KhiM8lalQEj4iotzqp4LRCwdmXESz2+DvK5g0LHbU4qUBw3PVeGMXND+C3GCssHpbx/A34M5ZKfSGsotkH/AWbpeCJZFv3N6cdvtUXPJGsKH6fnrDxLXgiWcBdB/h96ZqXkMzhMoE3MF8JPJGM4xwXmKwUnkhqqP0K/M/mHVFev9DVPV/MAAAAAElFTkSuQmCC";
  const emptyHeart =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACr0lEQVRIie2UO2wcVRSGv//OWMJFkEKEkREF9BSgiNfe2bG2IV0oSAUYiQIkShLiApkIohTIIi6oSAMoMiUu3CNL88KGJgWPBggFCGQRI7mIvfbOPRTZDYt31psgCgr+anTP/zjn3NGF/zEBOnyQZdksMO+cexo4YWbbkjYPDg5WOp3OzwAbGxsP7e/vz0t6UtJ9wI0QwhfASpqmv44NyPP8KeASMN3QTC+EsBxFEWZ2FogbODfNbDFN0y9HArIsm5V0FZg2s8rMPg4hXI/j+EEzOyPpNGADnXNubW9v7zPn3C/OuUeiKHrFzFrAzV6v93Kn0/mNQ13MD8zTNF0YOv8RWCqK4nszewNA0rL3fnWI8x2wUBTFkpm1pqamXgLeB3ADRn/nxHH8UcPoJEmy6py74py7kiTJahMnhPAJgJk9Mzi7PYGZHQfodrs/NYkBvPcr42r95q7XdQ1w/HbjQ/Wt/iSzR5kchbquZwEkbY0ESLoGEEXRs/80wMxO9T+vjQQAa33SmSzL7r9b87IsZyQ9D1gIYW0kIEmSb4B1YFrSopm5Bp9xnbu6rt8G7gE+T9P026YJAJbN7AZwMs/zc3dorqqq3pT0OLAdRdEHw/W/BbTb7T8kXZDUlfRclmWvTgooy/K1EMJpSV0zW2y1WtvD9ZG3qC96IoSwBEyZ2aftdvtDSTbMMTMVRfE68AK3npG35ubmqsNejXv23n8l6SLQk/RiVVXnh+/EzFxVVecH5nVdv9tkPnaCAfI8Pwm8x62Lz3d2dt6ZmZkJu7u7F4AOsCdpMUmSjXEeRwYAlGX5aH9d9/LX//0YsOOcW/Def32UfmIAwPr6+sNxHF8GHgCQ9Lukc977HyZp7ygAYHNz80S3270MxFEUnfXeb00U3S2KojhWFMWxf934P40/Ab3tHTo8eDDvAAAAAElFTkSuQmCC";
  const likedImage = is_my_favorite === "y" ? whiteHeart : emptyHeart;
  return (
    <tr className="library_trending_table_tr transition-[0.2s] duration-[ease-in-out] border-t-[none] border-solid border-y-[0.2px] border-x-0 border-[rgba(125,125,125,0.419)] hover:cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
      <td className="library_trending_table_tr_td p-2.5">
        <p className="library_trending_table_tr_td_p text-[13px]">
          순위 {musicId}
        </p>
      </td>
      <td>
        <img
          src={coverSource}
          alt=""
          className="song_cover w-[60px] rounded-lg"
        />
      </td>
      <td className="song p-2.5 flex flex-col gap-[5px] ml-[-25%]">
        <h4 className="song_h4 text-[15px]">{title}</h4>
        <p className="song_p text-[13px] text-[rgb(152,152,152)]">{nickname}</p>
      </td>
      <td className="library_trending_table_tr_td p-2.5">
        <p className="library_trending_table_tr_td_p text-[13px]">
          앨범명 {title}
        </p>
      </td>
      <td className="library_trending_table_tr_td p-2.5">
        <p className="library_trending_table_tr_td_p text-[13px]">
          재생수 149,976,180
        </p>
      </td>
      <td className="library_trending_table_tr_td p-2.5">
        <p className="library_trending_table_tr_td_p text-[13px]">
          음악길이 3:40
        </p>
      </td>
      <td className="library_trending_table_tr_td p-2.5">
        <img className="library_trending_img w-5" src={likedImage} />
      </td>
    </tr>
  );
}

export default TrendingSong;
