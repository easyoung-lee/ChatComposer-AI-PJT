import React from "react";

function Playlist() {
  return (
    <div className="mp_playlist_content absolute w-full h-3/5 flex flex-col gap-[15px] px-5 py-0 top-[16%]">
      <div className="mp_playlist_song flex justify-between items-center transition-[0.2s] duration-[ease-in-out] px-0 py-[5px] hover:cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
        <div className="mp_tracks_album flex w-fit h-fit gap-2.5">
          <img
            src="https://images.unsplash.com/photo-1446057032654-9d8885db76c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
            alt=""
            className="mp_tracks_album_img w-[60px]"
          />
          <div className="tracks">
            <h4 className="mp_tracks_album_h4 text-[15px] text-white">
              Insane
            </h4>
            <p className="mp_tracks_album_p text-[13px] text-[rgb(152,152,152)]">
              AP Dhillon
            </p>
          </div>
        </div>
        <div className="mp_tracks_menu">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAXUlEQVRYhe3UsRGAMAwEwXuKgGZMaSZwbSoGmrDoQePMv7k0Hx2Y7U7Vw4i4M/MBUtJorUXlz1EdkJkdOIEL6NU/5QGrlAdIGsAn6Z1zjoWbbDPugDtg5g64A2b2AwjvOQGxKmSGAAAAAElFTkSuQmCC" />
        </div>
      </div>
      <hr className=".mp_playlist_content_hr h-[0.5px] w-full -mt-2 border-[none] bg-gray-500/40" />
      <div className="mp_playlist_song flex justify-between items-center transition-[0.2s] duration-[ease-in-out] px-0 py-[5px] hover:cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
        <div className="mp_tracks_album">
          <img
            src="https://images.unsplash.com/photo-1520600661691-801f48869ee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
          <div className="tracks">
            <h4>Elevate</h4>
            <p>Drake</p>
          </div>
        </div>
        <div className="mp_tracks_menu">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAXUlEQVRYhe3UsRGAMAwEwXuKgGZMaSZwbSoGmrDoQePMv7k0Hx2Y7U7Vw4i4M/MBUtJorUXlz1EdkJkdOIEL6NU/5QGrlAdIGsAn6Z1zjoWbbDPugDtg5g64A2b2AwjvOQGxKmSGAAAAAElFTkSuQmCC" />
        </div>
      </div>
      <hr />
      <div className="mp_playlist_song">
        <div className="mp_tracks_album">
          <img
            src="https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
          <div className="tracks">
            <h4>Drive</h4>
            <p>Black Coffee</p>
          </div>
        </div>
        <div className="mp_tracks_menu">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAXUlEQVRYhe3UsRGAMAwEwXuKgGZMaSZwbSoGmrDoQePMv7k0Hx2Y7U7Vw4i4M/MBUtJorUXlz1EdkJkdOIEL6NU/5QGrlAdIGsAn6Z1zjoWbbDPugDtg5g64A2b2AwjvOQGxKmSGAAAAAElFTkSuQmCC" />
        </div>
      </div>
      <hr />
      <div className="mp_playlist_song">
        <div className="mp_tracks_album">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
          <div className="tracks">
            <h4>Popstar</h4>
            <p>DJ Khaled</p>
          </div>
        </div>
        <div className="mp_tracks_menu">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAXUlEQVRYhe3UsRGAMAwEwXuKgGZMaSZwbSoGmrDoQePMv7k0Hx2Y7U7Vw4i4M/MBUtJorUXlz1EdkJkdOIEL6NU/5QGrlAdIGsAn6Z1zjoWbbDPugDtg5g64A2b2AwjvOQGxKmSGAAAAAElFTkSuQmCC" />
        </div>
      </div>
      <hr />
      <div className="mp_playlist_song">
        <div className="mp_tracks_album">
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
          <div className="tracks">
            <h4>Nothin'</h4>
            <p>N.O.R.E</p>
          </div>
        </div>
        <div className="mp_tracks_menu">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAXUlEQVRYhe3UsRGAMAwEwXuKgGZMaSZwbSoGmrDoQePMv7k0Hx2Y7U7Vw4i4M/MBUtJorUXlz1EdkJkdOIEL6NU/5QGrlAdIGsAn6Z1zjoWbbDPugDtg5g64A2b2AwjvOQGxKmSGAAAAAElFTkSuQmCC" />
        </div>
      </div>
      <hr />
      <div className="mp_playlist_song">
        <div className="mp_tracks_album">
          <img
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
          <div className="tracks">
            <h4>Alive</h4>
            <p>Krewella</p>
          </div>
        </div>
        <div className="mp_tracks_menu">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAXUlEQVRYhe3UsRGAMAwEwXuKgGZMaSZwbSoGmrDoQePMv7k0Hx2Y7U7Vw4i4M/MBUtJorUXlz1EdkJkdOIEL6NU/5QGrlAdIGsAn6Z1zjoWbbDPugDtg5g64A2b2AwjvOQGxKmSGAAAAAElFTkSuQmCC" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Playlist;
