import React from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="mp_sidebar absolute w-[100px] h-full flex flex-col justify-between items-center px-0 py-[25px] rounded-[20px_0px_0px_20px] left-0 top-0">
      <div className="sidebar_logo ">
        <img
          className="sidebar_logo_img w-[50px] mb-[30px]"
          src="https://cdn-icons-png.flaticon.com/512/3293/3293810.png"
        />
      </div>
      <Tab.Group vertical>
        <Tab.List className="sidebar_menu flex flex-col gap-[30px] flex-[1]">
          <Tab className="sidebar_menu_image w-5 transition-[0.2s] duration-[ease-in-out] hover:cursor-pointer hover:scale-125">
            <Link href="/">Tab 1</Link>
          </Tab>
          <Tab>
            <Link href="/sequencer">Tab 2</Link>
          </Tab>
          <Tab>
            <Link href="/chat">Tab 3</Link>
          </Tab>
        </Tab.List>
      </Tab.Group>
      <div className="sidebar_menu flex flex-col gap-[30px] flex-[1]">
        <img
          className="sidebar_menu_image w-5 transition-[0.2s] duration-[ease-in-out] hover:cursor-pointer hover:scale-125"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABEElEQVRIie2TMUqDQRCF34T8hdgELYVYpdAmnY05QTyCpLHzBJZioTdIo50B7YWkUSzVIs1/nghfCkdYAstOfkkh+mCbnXnvzczOSn8KwAgYbULYgHOg9nMBtCJcC4hXkq4knUha+HUlaSrp0swWOW4RwBYw9qrfgWPgCHjzuztgu6l4B5i40CtwkMR6wLPHHoHddcX3gCcXmALdQs4M2I+K94AXJz4AO4Uu75MuD0vi6XxvI/NdeacPYJBLHALzZBXbJfGE2054c2D4HWt5wqmka32tnyTJzD6jBiu5laQb4CxXTQ3UUfESLzSGnKGZ9Uvc0Hf/CdYyMLN+pOrGBk3w+w2yWxRZ1UjOxjv4RxFLW3QYbNPY/+0AAAAASUVORK5CYII="
        />
        <img
          className="sidebar_menu_image w-5 transition-[0.2s] duration-[ease-in-out] hover:cursor-pointer hover:scale-125"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABxElEQVRIidWUv27UQBCHv1m7ubsUpCf0EY9wXh/HKyBFugaq0PAEFKmQ8gKIhj9NhHSRDvEKR7y+gheAPtCeghRSIMs7FLeGBBzbR4IQv2bs0fzm2x2vF/53SV3SObcpIjtAoqpbIX0cRVFeluXMWnvyx4DFYnHXe78H9GsNImfAkyRJ5msDQvP9VR858t4fxnH8MTTeLopiIiKpiHhVfWytfdcZ4JzbBN4CfWPM0+Fw+LrO4Jy7DzwSka9FUdwbj8dfmgDmB2k1876IHF3WHMBaewA4Vd2I43inbQfm3LMF8N4ftpmAaYhJZ4Cq3gSoZt6kXq9X1Ww1FnJxB9pWXGm5XNYe70aAiHwOcbvNNBgMqppPnQHGGAdQFMWkzaSqkxBdZ0BZljMRORORNBzFWuV5/oDVxz0VkTdtgAuzzPN8DOyrqgEcMI2i6AOA9/52WHkS3p+PRqNXawEAnHN3RGRPVTcu8Zx676fGmIcAqvoyTdMXnQEA8/n8RviJEuBWSB8DOTCz1p44595X9U2QzsftV1VXxrnUgbX22bUBukKuBOgCuTKgDWLqLesp3LA/Vy3y7Tr6/qYsy3azLNv9K83/mb4D+s23Z1Qya+gAAAAASUVORK5CYII="
        />
        <img
          className="sidebar_menu_image w-5 transition-[0.2s] duration-[ease-in-out] hover:cursor-pointer hover:scale-125"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACr0lEQVRIie2UO2wcVRSGv//OWMJFkEKEkREF9BSgiNfe2bG2IV0oSAUYiQIkShLiApkIohTIIi6oSAMoMiUu3CNL88KGJgWPBggFCGQRI7mIvfbOPRTZDYt31psgCgr+anTP/zjn3NGF/zEBOnyQZdksMO+cexo4YWbbkjYPDg5WOp3OzwAbGxsP7e/vz0t6UtJ9wI0QwhfASpqmv44NyPP8KeASMN3QTC+EsBxFEWZ2FogbODfNbDFN0y9HArIsm5V0FZg2s8rMPg4hXI/j+EEzOyPpNGADnXNubW9v7zPn3C/OuUeiKHrFzFrAzV6v93Kn0/mNQ13MD8zTNF0YOv8RWCqK4nszewNA0rL3fnWI8x2wUBTFkpm1pqamXgLeB3ADRn/nxHH8UcPoJEmy6py74py7kiTJahMnhPAJgJk9Mzi7PYGZHQfodrs/NYkBvPcr42r95q7XdQ1w/HbjQ/Wt/iSzR5kchbquZwEkbY0ESLoGEEXRs/80wMxO9T+vjQQAa33SmSzL7r9b87IsZyQ9D1gIYW0kIEmSb4B1YFrSopm5Bp9xnbu6rt8G7gE+T9P026YJAJbN7AZwMs/zc3dorqqq3pT0OLAdRdEHw/W/BbTb7T8kXZDUlfRclmWvTgooy/K1EMJpSV0zW2y1WtvD9ZG3qC96IoSwBEyZ2aftdvtDSTbMMTMVRfE68AK3npG35ubmqsNejXv23n8l6SLQk/RiVVXnh+/EzFxVVecH5nVdv9tkPnaCAfI8Pwm8x62Lz3d2dt6ZmZkJu7u7F4AOsCdpMUmSjXEeRwYAlGX5aH9d9/LX//0YsOOcW/Def32UfmIAwPr6+sNxHF8GHgCQ9Lukc977HyZp7ygAYHNz80S3270MxFEUnfXeb00U3S2KojhWFMWxf934P40/Ab3tHTo8eDDvAAAAAElFTkSuQmCC"
        />
        <img
          className="sidebar_menu_image w-5 transition-[0.2s] duration-[ease-in-out] hover:cursor-pointer hover:scale-125"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABkUlEQVRIie2UsUubQRjGf+8RCV8UQxT/iFoXIVPMJYOOho4uGbTQQf+AjoWOXUVwsi6dOnVwCUQhd5IpIB1KdzsGNDTgDSZ5O/RrCfLp99mlCD7bPfe+z/O8x93BU4dkKer1ejMhhD1gE1DgJIqiw3K5fJvWm8tiEELYBbanqJ0QAsB+Wq/JYsDv5ADbk8nk9R3uQWSaAFgCsNZ+BfDe/+XSkHWCf8azwf83SLxFzrmuiESDwWCt0WjcAH1gqdPprIrIn8fZB2i1WrOFQuEcuLHWrt3VSpxARH4AlEql5Zg6ATDGfBSRo2kuiqKX8foySeu+I+oAqGozFjkEjuPUfeA45jDGNONalxg2iWy324v5fP4LMCciB9Vq9Sipzjn3RkT2gCHwylp7nckAwHu/oaofRMQAbjwefxoOh98AisXiijGmqapWVSfA21qtdpp5gqmE68A7EZlP2lfVn6r6vl6vn92nkfpdd7vdhdFotCUiFngRC38HXC6X+1ypVK7SNDLDe3/hvb94TM/Tf8nPSMUvIMx/WCoNrBcAAAAASUVORK5CYII="
        />
        <img
          className="sidebar_menu_image w-5 transition-[0.2s] duration-[ease-in-out] hover:cursor-pointer hover:scale-125"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABBUlEQVRIie1VMW6DQBCctewOJPhC/AJKJLajSZEP2B+IFJ5DkwfkI2zhkhfYEg+IEomOgDYNZ10c2xwRkWXZU63mbmf29nR7wLWDXDYVRfFMRCsAi576IqK3JEleh3JnTlX8FAeAhaquXXKdDIw4M8fMHNvcVAZ/xt3g8gbzQ6Isy6Cu65yIlkPJIrIxsapWTdO8pGn6bu/5dYIoij59389Udeta5SnxowbHTFS1atv2yax7nvdor50SBwZGhd0uVa26rsuCIGht7pz4oAEAiEgIIAfwAGDX0ybOmPnjXL7TsDu8eJfKRxnYJgDmruKjISJh37Ibwv4O7Fc5Bcy/8e+z6PrxDQ7Ti7IyL6OZAAAAAElFTkSuQmCC"
        />
        <img
          className="sidebar_menu_image w-5 transition-[0.2s] duration-[ease-in-out] hover:cursor-pointer hover:scale-125"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAzklEQVRIie2UwRGCMBRE9yfWILbh3eRsJ9oD3NKEdpMJeLYNqOJ7IQwiKB9h9MA7kSHZnd0/CbDyayh+FEVxYOYMQNK3kZmv1tqL1EC1BAbFAYCITiGEs9SgSZDn+V16eICKmZ219ga0EsxIQkRZXGy6f40x+2/U6yZ2cb1EgideEryjO6cxaf8rQUQyp1EG3nujlMo+75xooLVOAWynGEyZQTm7ATM7ABWAUmvtJAajKqqv/VEi3GdQAUhmepOaGtuvqYOw3yFxaY0ry/IAySI7bOUg1NwAAAAASUVORK5CYII="
        />
        <img
          className="sidebar_menu_image w-5 transition-[0.2s] duration-[ease-in-out] hover:cursor-pointer hover:scale-125"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAQElEQVRIiWNgGAXUBIcPHz5y+PDhI6ToYaKVY0YtGLWAeoARmUNqGscFbG1tbWBsmvuAJDCak0ctGKYWjAKCAAB8yhBUbF/pJwAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="sidebar_logout">
        <img
          className="sidebar_logout_login @apply w-[30px] transition-[0.2s] duration-[ease-in-out] hover:cursor-pointer hover:scale-125"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACAklEQVRoge2ZP2tUQRTFfydEwfULJCpY5ANYqa1FlECwUhArIU0QrG1SaKG9RZZ0EWtBUEQQBC39A8GPYCEkRYqNkigYcizegMsSzMzbu3nN/JrLwpvzzr0zs+++eVCpVCqVMVCUkO0p4AZwAZhuIbEPfAVeSDqI8pWFbdl+5Rhe2s4ubMgM2F4EXgObQJ+mmqVMA/eAGWBR0psIb1nYXknVezSmzuOks5I7ZmqcGw5xIsU2lR/mz4jekUQl0Bk1ga6pCST2UtwN0sumzRPzMNaAbeB5kF42IQlI+gmsR2iV0noJ2T5r+6HtmUhDpbSaAdvngA/AHDAAnkSaKqF4BkbMfwGeRpsqoSiBZP49jfkNYEHSziSM5ZK9hGyf4V/lD2iqf992rsQ+sCppq9Tk/yjZA7dozEMzc8st7rdN8H4pSWAduA1cTL9Xge8F43eBZwXXZ5GdgKQd21eBt8Bl4DpwRdK3aFMlFG3itGEXaNb/eeCd7dlJGMul+G9U0gC4RpPEHM3e6IxWDzJJA9vzwE066H+Gad0LSfpBR/3PMCHttO3ZrvqiqPeBJeBBisdK9KnEySC9bOorZdfUBLomKoHfKZ4aU6eX4q/cAVGnEh9TvGu7R7vjldPAnRG948N2P+j7QL/kvmFfaFISl2ha7d5R1x7CHvBJ0udIT5VKpTJZ/gIArCTzj9YnhAAAAABJRU5ErkJggg=="
        />
      </div>
    </div>
  );
}

export default Sidebar;
