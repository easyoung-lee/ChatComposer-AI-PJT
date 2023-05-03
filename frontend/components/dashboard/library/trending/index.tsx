import React from "react";

function Trending() {
  return (
    <>
      <h3 className="library_trending_title text-white text-[17px] mt-[30px] mb-2.5 pl-5">
        Trending Songs
      </h3>
      <div className="library_trending custom_scrollbar w-[850px] h-[300px] overflow-y-scroll scroll-smooth px-5 py-0">
        <table className="library_trending_table w-full text-white border-collapse">
          <tbody>
            <tr className="library_trending_table_tr transition-[0.2s] duration-[ease-in-out] border-t-[none] border-solid border-y-[0.2px] border-x-0 border-[rgba(125,125,125,0.419)] hover:cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
              <td className="library_trending_table_tr_td p-2.5">
                <p className="library_trending_table_tr_td_p text-[13px]">1</p>
              </td>
              <td>
                <img
                  src="https://images.unsplash.com/photo-1446057032654-9d8885db76c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                  alt=""
                  className="song_cover"
                />
              </td>
              <td className="song p-2.5 flex flex-col gap-[5px] ml-[-25%]">
                <h4 className="song_h4 text-[15px]">Insane</h4>
                <p className="song_p text-[13px] text-[rgb(152,152,152)]">
                  AP Dhillon
                </p>
              </td>
              <td className="library_trending_table_tr_td p-2.5">
                <p className="library_trending_table_tr_td_p text-[13px]">
                  Insane
                </p>
              </td>
              <td className="library_trending_table_tr_td p-2.5">
                <p className="library_trending_table_tr_td_p text-[13px]">
                  149,976,180
                </p>
              </td>
              <td className="library_trending_table_tr_td p-2.5">
                <p className="library_trending_table_tr_td_p text-[13px]">
                  3:40
                </p>
              </td>
              <td className="library_trending_table_tr_td p-2.5">
                <img
                  className="library_trending_img w-5"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACr0lEQVRIie2UO2wcVRSGv//OWMJFkEKEkREF9BSgiNfe2bG2IV0oSAUYiQIkShLiApkIohTIIi6oSAMoMiUu3CNL88KGJgWPBggFCGQRI7mIvfbOPRTZDYt31psgCgr+anTP/zjn3NGF/zEBOnyQZdksMO+cexo4YWbbkjYPDg5WOp3OzwAbGxsP7e/vz0t6UtJ9wI0QwhfASpqmv44NyPP8KeASMN3QTC+EsBxFEWZ2FogbODfNbDFN0y9HArIsm5V0FZg2s8rMPg4hXI/j+EEzOyPpNGADnXNubW9v7zPn3C/OuUeiKHrFzFrAzV6v93Kn0/mNQ13MD8zTNF0YOv8RWCqK4nszewNA0rL3fnWI8x2wUBTFkpm1pqamXgLeB3ADRn/nxHH8UcPoJEmy6py74py7kiTJahMnhPAJgJk9Mzi7PYGZHQfodrs/NYkBvPcr42r95q7XdQ1w/HbjQ/Wt/iSzR5kchbquZwEkbY0ESLoGEEXRs/80wMxO9T+vjQQAa33SmSzL7r9b87IsZyQ9D1gIYW0kIEmSb4B1YFrSopm5Bp9xnbu6rt8G7gE+T9P026YJAJbN7AZwMs/zc3dorqqq3pT0OLAdRdEHw/W/BbTb7T8kXZDUlfRclmWvTgooy/K1EMJpSV0zW2y1WtvD9ZG3qC96IoSwBEyZ2aftdvtDSTbMMTMVRfE68AK3npG35ubmqsNejXv23n8l6SLQk/RiVVXnh+/EzFxVVecH5nVdv9tkPnaCAfI8Pwm8x62Lz3d2dt6ZmZkJu7u7F4AOsCdpMUmSjXEeRwYAlGX5aH9d9/LX//0YsOOcW/Def32UfmIAwPr6+sNxHF8GHgCQ9Lukc977HyZp7ygAYHNz80S3270MxFEUnfXeb00U3S2KojhWFMWxf934P40/Ab3tHTo8eDDvAAAAAElFTkSuQmCC"
                />
              </td>
            </tr>
            <tr>
              <td>
                <p>2</p>
              </td>
              <td>
                <img
                  src="https://images.unsplash.com/photo-1457523054379-8d03ab9fc2aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt=""
                  className="song_cover"
                />
              </td>
              <td className="song">
                <h4>Out The Mud</h4>
                <p>Lil Baby</p>
              </td>
              <td>
                <p>Out The Mud</p>
              </td>
              <td>
                <p>149,976,180</p>
              </td>
              <td>
                <p>2:38</p>
              </td>
              <td>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABJklEQVRIie3UTytEURjH8efaSLGYjSiSYmFjKQtWQrLlJfAavBSKrYV3wSuw8QIYI6UsiCbKx+aOjjFz5w5XWfjVqdP58/2e89zbifhPv8E0DlDHK65xiJlkzSyO8rnXfO0+pnvB1/Goc16wg9283ykPWCs6eTd4K295K8oDplrcgcSxFxHDPSqY5a0oIznrY0PrBvWImOixuWyusiybahc0I2KwIkEzy7KhiM8lalQEj4iotzqp4LRCwdmXESz2+DvK5g0LHbU4qUBw3PVeGMXND+C3GCssHpbx/A34M5ZKfSGsotkH/AWbpeCJZFv3N6cdvtUXPJGsKH6fnrDxLXgiWcBdB/h96ZqXkMzhMoE3MF8JPJGM4xwXmKwUnkhqqP0K/M/mHVFev9DVPV/MAAAAAElFTkSuQmCC" />
              </td>
            </tr>
            <tr>
              <td>
                <p>3</p>
              </td>
              <td>
                <img
                  src="https://images.unsplash.com/photo-1520600661691-801f48869ee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt=""
                  className="song_cover"
                />
              </td>
              <td className="song">
                <h4>Elevate</h4>
                <p>Drake</p>
              </td>
              <td>
                <p>Scorpion</p>
              </td>
              <td>
                <p>149,976,180</p>
              </td>
              <td>
                <p>3:05</p>
              </td>
              <td>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABJklEQVRIie3UTytEURjH8efaSLGYjSiSYmFjKQtWQrLlJfAavBSKrYV3wSuw8QIYI6UsiCbKx+aOjjFz5w5XWfjVqdP58/2e89zbifhPv8E0DlDHK65xiJlkzSyO8rnXfO0+pnvB1/Goc16wg9283ykPWCs6eTd4K295K8oDplrcgcSxFxHDPSqY5a0oIznrY0PrBvWImOixuWyusiybahc0I2KwIkEzy7KhiM8lalQEj4iotzqp4LRCwdmXESz2+DvK5g0LHbU4qUBw3PVeGMXND+C3GCssHpbx/A34M5ZKfSGsotkH/AWbpeCJZFv3N6cdvtUXPJGsKH6fnrDxLXgiWcBdB/h96ZqXkMzhMoE3MF8JPJGM4xwXmKwUnkhqqP0K/M/mHVFev9DVPV/MAAAAAElFTkSuQmCC" />
              </td>
            </tr>
            <tr>
              <td>
                <p>4</p>
              </td>
              <td>
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt=""
                  className="song_cover"
                />
              </td>
              <td className="song">
                <h4>Popstar</h4>
                <p>DJ Khaled</p>
              </td>
              <td>
                <p>Popstar</p>
              </td>
              <td>
                <p>149,976,180</p>
              </td>
              <td>
                <p>3:20</p>
              </td>
              <td>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACr0lEQVRIie2UO2wcVRSGv//OWMJFkEKEkREF9BSgiNfe2bG2IV0oSAUYiQIkShLiApkIohTIIi6oSAMoMiUu3CNL88KGJgWPBggFCGQRI7mIvfbOPRTZDYt31psgCgr+anTP/zjn3NGF/zEBOnyQZdksMO+cexo4YWbbkjYPDg5WOp3OzwAbGxsP7e/vz0t6UtJ9wI0QwhfASpqmv44NyPP8KeASMN3QTC+EsBxFEWZ2FogbODfNbDFN0y9HArIsm5V0FZg2s8rMPg4hXI/j+EEzOyPpNGADnXNubW9v7zPn3C/OuUeiKHrFzFrAzV6v93Kn0/mNQ13MD8zTNF0YOv8RWCqK4nszewNA0rL3fnWI8x2wUBTFkpm1pqamXgLeB3ADRn/nxHH8UcPoJEmy6py74py7kiTJahMnhPAJgJk9Mzi7PYGZHQfodrs/NYkBvPcr42r95q7XdQ1w/HbjQ/Wt/iSzR5kchbquZwEkbY0ESLoGEEXRs/80wMxO9T+vjQQAa33SmSzL7r9b87IsZyQ9D1gIYW0kIEmSb4B1YFrSopm5Bp9xnbu6rt8G7gE+T9P026YJAJbN7AZwMs/zc3dorqqq3pT0OLAdRdEHw/W/BbTb7T8kXZDUlfRclmWvTgooy/K1EMJpSV0zW2y1WtvD9ZG3qC96IoSwBEyZ2aftdvtDSTbMMTMVRfE68AK3npG35ubmqsNejXv23n8l6SLQk/RiVVXnh+/EzFxVVecH5nVdv9tkPnaCAfI8Pwm8x62Lz3d2dt6ZmZkJu7u7F4AOsCdpMUmSjXEeRwYAlGX5aH9d9/LX//0YsOOcW/Def32UfmIAwPr6+sNxHF8GHgCQ9Lukc977HyZp7ygAYHNz80S3270MxFEUnfXeb00U3S2KojhWFMWxf934P40/Ab3tHTo8eDDvAAAAAElFTkSuQmCC" />
              </td>
            </tr>
            <tr>
              <td>
                <p>5</p>
              </td>
              <td>
                <img
                  src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt=""
                  className="song_cover"
                />
              </td>
              <td className="song">
                <h4>Can't Stop Me</h4>
                <p>Avicii</p>
              </td>
              <td>
                <p>Can't Stop Me</p>
              </td>
              <td>
                <p>149,976,180</p>
              </td>
              <td>
                <p>5:20</p>
              </td>
              <td>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACr0lEQVRIie2UO2wcVRSGv//OWMJFkEKEkREF9BSgiNfe2bG2IV0oSAUYiQIkShLiApkIohTIIi6oSAMoMiUu3CNL88KGJgWPBggFCGQRI7mIvfbOPRTZDYt31psgCgr+anTP/zjn3NGF/zEBOnyQZdksMO+cexo4YWbbkjYPDg5WOp3OzwAbGxsP7e/vz0t6UtJ9wI0QwhfASpqmv44NyPP8KeASMN3QTC+EsBxFEWZ2FogbODfNbDFN0y9HArIsm5V0FZg2s8rMPg4hXI/j+EEzOyPpNGADnXNubW9v7zPn3C/OuUeiKHrFzFrAzV6v93Kn0/mNQ13MD8zTNF0YOv8RWCqK4nszewNA0rL3fnWI8x2wUBTFkpm1pqamXgLeB3ADRn/nxHH8UcPoJEmy6py74py7kiTJahMnhPAJgJk9Mzi7PYGZHQfodrs/NYkBvPcr42r95q7XdQ1w/HbjQ/Wt/iSzR5kchbquZwEkbY0ESLoGEEXRs/80wMxO9T+vjQQAa33SmSzL7r9b87IsZyQ9D1gIYW0kIEmSb4B1YFrSopm5Bp9xnbu6rt8G7gE+T9P026YJAJbN7AZwMs/zc3dorqqq3pT0OLAdRdEHw/W/BbTb7T8kXZDUlfRclmWvTgooy/K1EMJpSV0zW2y1WtvD9ZG3qC96IoSwBEyZ2aftdvtDSTbMMTMVRfE68AK3npG35ubmqsNejXv23n8l6SLQk/RiVVXnh+/EzFxVVecH5nVdv9tkPnaCAfI8Pwm8x62Lz3d2dt6ZmZkJu7u7F4AOsCdpMUmSjXEeRwYAlGX5aH9d9/LX//0YsOOcW/Def32UfmIAwPr6+sNxHF8GHgCQ9Lukc977HyZp7ygAYHNz80S3270MxFEUnfXeb00U3S2KojhWFMWxf934P40/Ab3tHTo8eDDvAAAAAElFTkSuQmCC" />
              </td>
            </tr>
            <tr>
              <td>
                <p>6</p>
              </td>
              <td>
                <img
                  src="https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt=""
                  className="song_cover"
                />
              </td>
              <td className="song">
                <h4>Drive</h4>
                <p>Black Coffee</p>
              </td>
              <td>
                <p>Drive</p>
              </td>
              <td>
                <p>149,976,180</p>
              </td>
              <td>
                <p>4:44</p>
              </td>
              <td>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACr0lEQVRIie2UO2wcVRSGv//OWMJFkEKEkREF9BSgiNfe2bG2IV0oSAUYiQIkShLiApkIohTIIi6oSAMoMiUu3CNL88KGJgWPBggFCGQRI7mIvfbOPRTZDYt31psgCgr+anTP/zjn3NGF/zEBOnyQZdksMO+cexo4YWbbkjYPDg5WOp3OzwAbGxsP7e/vz0t6UtJ9wI0QwhfASpqmv44NyPP8KeASMN3QTC+EsBxFEWZ2FogbODfNbDFN0y9HArIsm5V0FZg2s8rMPg4hXI/j+EEzOyPpNGADnXNubW9v7zPn3C/OuUeiKHrFzFrAzV6v93Kn0/mNQ13MD8zTNF0YOv8RWCqK4nszewNA0rL3fnWI8x2wUBTFkpm1pqamXgLeB3ADRn/nxHH8UcPoJEmy6py74py7kiTJahMnhPAJgJk9Mzi7PYGZHQfodrs/NYkBvPcr42r95q7XdQ1w/HbjQ/Wt/iSzR5kchbquZwEkbY0ESLoGEEXRs/80wMxO9T+vjQQAa33SmSzL7r9b87IsZyQ9D1gIYW0kIEmSb4B1YFrSopm5Bp9xnbu6rt8G7gE+T9P026YJAJbN7AZwMs/zc3dorqqq3pT0OLAdRdEHw/W/BbTb7T8kXZDUlfRclmWvTgooy/K1EMJpSV0zW2y1WtvD9ZG3qC96IoSwBEyZ2aftdvtDSTbMMTMVRfE68AK3npG35ubmqsNejXv23n8l6SLQk/RiVVXnh+/EzFxVVecH5nVdv9tkPnaCAfI8Pwm8x62Lz3d2dt6ZmZkJu7u7F4AOsCdpMUmSjXEeRwYAlGX5aH9d9/LX//0YsOOcW/Def32UfmIAwPr6+sNxHF8GHgCQ9Lukc977HyZp7ygAYHNz80S3270MxFEUnfXeb00U3S2KojhWFMWxf934P40/Ab3tHTo8eDDvAAAAAElFTkSuQmCC" />
              </td>
            </tr>
            <tr>
              <td>
                <p>7</p>
              </td>
              <td>
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt=""
                  className="library_trending_song_cover w-[60px] rounded-lg"
                />
              </td>
              <td className="song">
                <h4 className="song_h4">Sicko Mode</h4>
                <p className="song_p">Travis Scott</p>
              </td>
              <td>
                <p>Astroworld</p>
              </td>
              <td>
                <p>149,976,180</p>
              </td>
              <td>
                <p>5:13</p>
              </td>
              <td>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACr0lEQVRIie2UO2wcVRSGv//OWMJFkEKEkREF9BSgiNfe2bG2IV0oSAUYiQIkShLiApkIohTIIi6oSAMoMiUu3CNL88KGJgWPBggFCGQRI7mIvfbOPRTZDYt31psgCgr+anTP/zjn3NGF/zEBOnyQZdksMO+cexo4YWbbkjYPDg5WOp3OzwAbGxsP7e/vz0t6UtJ9wI0QwhfASpqmv44NyPP8KeASMN3QTC+EsBxFEWZ2FogbODfNbDFN0y9HArIsm5V0FZg2s8rMPg4hXI/j+EEzOyPpNGADnXNubW9v7zPn3C/OuUeiKHrFzFrAzV6v93Kn0/mNQ13MD8zTNF0YOv8RWCqK4nszewNA0rL3fnWI8x2wUBTFkpm1pqamXgLeB3ADRn/nxHH8UcPoJEmy6py74py7kiTJahMnhPAJgJk9Mzi7PYGZHQfodrs/NYkBvPcr42r95q7XdQ1w/HbjQ/Wt/iSzR5kchbquZwEkbY0ESLoGEEXRs/80wMxO9T+vjQQAa33SmSzL7r9b87IsZyQ9D1gIYW0kIEmSb4B1YFrSopm5Bp9xnbu6rt8G7gE+T9P026YJAJbN7AZwMs/zc3dorqqq3pT0OLAdRdEHw/W/BbTb7T8kXZDUlfRclmWvTgooy/K1EMJpSV0zW2y1WtvD9ZG3qC96IoSwBEyZ2aftdvtDSTbMMTMVRfE68AK3npG35ubmqsNejXv23n8l6SLQk/RiVVXnh+/EzFxVVecH5nVdv9tkPnaCAfI8Pwm8x62Lz3d2dt6ZmZkJu7u7F4AOsCdpMUmSjXEeRwYAlGX5aH9d9/LX//0YsOOcW/Def32UfmIAwPr6+sNxHF8GHgCQ9Lukc977HyZp7ygAYHNz80S3270MxFEUnfXeb00U3S2KojhWFMWxf934P40/Ab3tHTo8eDDvAAAAAElFTkSuQmCC" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Trending;
