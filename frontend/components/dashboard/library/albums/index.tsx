import React from "react";

function Albums() {
  return (
    <div className="library_album ml-5 mt-[30px]">
      <h3 className="libray_h3 text-white text-[17px] mb-[15px]">
        Recently Listened Albums
      </h3>
      <div className="library_album_albums flex gap-[15px]">
        <div className="library_album_covers relative w-[190px] h-[130px] flex flex-col justify-end shadow-[0_0_5px_#000] transition-[0.2s] duration-[ease-in-out] p-2.5 rounded-[10px] hover:cursor-pointer hover:scale-105">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
            className="album_cover absolute w-full h-full z-[-4] rounded-[10px] left-0 top-0"
          />
          <img
            className="library_album_covers_img absolute w-[30px] right-2.5 top-2.5"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAApElEQVRIie2TPQ7CMAxGHcTIlTgBVD0UQuqJuhVFQt04CSNlf1060BTF+etQqU/KZn8vih2RnZIAPX6ebo+JFKDVGGNmmYcYQQq7wGUx5GNKijtIH5t7ojABUAMW+AJvoAXORYxAo/xW9bP5wmstPFdgSwtm6wYMInJSm1Ze009MsSt4BfSE1PwHqAJGcEkWTJK7J/yWFf4juQIPYJhOl33zzTIC7lwSFRt0S08AAAAASUVORK5CYII="
          />
          <h5 className="library_album_covers_h5 text-white text-[15px] z-[2]">
            Hip-Hop
          </h5>
          <p className="library_album_covers_p text-white text-xs z-[2]">
            10 new songs
          </p>
          <span className="library_album_covers_span absolute w-full h-[60px] bg-[#00000029] backdrop-blur-[10px] rounded-[0_0_10px_10px] left-0 bottom-0" />
        </div>
        <div className="library_album_covers">
          <img
            src="https://images.unsplash.com/photo-1505672984986-b7c468c7a134?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
            className="album_cover"
          />
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAApElEQVRIie2TPQ7CMAxGHcTIlTgBVD0UQuqJuhVFQt04CSNlf1060BTF+etQqU/KZn8vih2RnZIAPX6ebo+JFKDVGGNmmYcYQQq7wGUx5GNKijtIH5t7ojABUAMW+AJvoAXORYxAo/xW9bP5wmstPFdgSwtm6wYMInJSm1Ze009MsSt4BfSE1PwHqAJGcEkWTJK7J/yWFf4juQIPYJhOl33zzTIC7lwSFRt0S08AAAAASUVORK5CYII=" />
          <h5>Electronic</h5>
          <p>20 new songs</p>
          <span />
        </div>
        <div className="library_album_covers">
          <img
            src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
            className="album_cover"
          />
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAApElEQVRIie2TPQ7CMAxGHcTIlTgBVD0UQuqJuhVFQt04CSNlf1060BTF+etQqU/KZn8vih2RnZIAPX6ebo+JFKDVGGNmmYcYQQq7wGUx5GNKijtIH5t7ojABUAMW+AJvoAXORYxAo/xW9bP5wmstPFdgSwtm6wYMInJSm1Ze009MsSt4BfSE1PwHqAJGcEkWTJK7J/yWFf4juQIPYJhOl33zzTIC7lwSFRt0S08AAAAASUVORK5CYII=" />
          <h5>Pop</h5>
          <p>30 new songs</p>
          <span />
        </div>
        <div className="library_album_covers">
          <img
            src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
            className="album_cover"
          />
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAApElEQVRIie2TPQ7CMAxGHcTIlTgBVD0UQuqJuhVFQt04CSNlf1060BTF+etQqU/KZn8vih2RnZIAPX6ebo+JFKDVGGNmmYcYQQq7wGUx5GNKijtIH5t7ojABUAMW+AJvoAXORYxAo/xW9bP5wmstPFdgSwtm6wYMInJSm1Ze009MsSt4BfSE1PwHqAJGcEkWTJK7J/yWFf4juQIPYJhOl33zzTIC7lwSFRt0S08AAAAASUVORK5CYII=" />
          <h5>Rock</h5>
          <p>40 new songs</p>
          <span />
        </div>
      </div>
    </div>
  );
}

export default Albums;
