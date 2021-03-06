// One Google Drive file ID per line
let clipIDs = ["1-RB0iPxKZoZoWmPy2vzIGtHSXat8T4xp", //dance1.mp4
               "121zt8UdU0xoh0ecU-BqzJ2DhLBf1xlCx", //dance2.mp4
               "1LHPUDBTlsCJTy-DDv7QMH0ztFWSovbj-", //dance3.mp4
               "1UFYAxxdTCoKRBcTmy7-UZqB4AnhAoMyY", //dance4.mp4
               "1x7vt6LdnwlQInHXna-D_ui3ApgOwTF-U", //dance5.mp4
               "1RhCwxJHylWApuJotngejF_Jpu_Eeo_xB", //game1.mp4
               "1jiF5VgzriPXylPGxWTPE9buwMIqez52q", //game2.mp4
               "1aDbUZttOg6KocEVHax86nR-LpGxCxMCN", //game3
               "1t9sLojpw_ZBm1i3y6NqJPD-BQ_r4jprm", //golf1
               "1mugx5YInczmvJoZ3xcsXmpD__wisrVYB", //golf2
               "1TtNCz_RoDk_xlP3GwZiEG-cRfltpzBxP", //golf3
               "1Dm9ach1L6FStc5oSl7FKxt4iwym-F275", //golf4
               "1nT6WTZPTU1WZblKpD0HjdcY-t6yPR-LP", //golf5
               "1eoilIKKgkgvknLHhF2ybrWhpTfQLLtvD", //golf6
               "1jTDxPqzV2L85lpyE14ZfVNZqgoeLS_I-", //harp1
               "1x8szx71jXMzPT2gdTRZK6ydNBhI5BkLg", //harp2
               "110giUHtsMI4xpetXRoqK3LZknD_ErL1y", //harp3
               "1sv_hZLGLEL0P7lz6AepxhYiwk2qz4DL7", //irl1
               "14THzFDoj1i55bm8vf6vbXMjpoFwsyYob", //irl2
               "12Spd3f0lZoAZ1UiQL2mZYDwIRbczBBeq", //irl3
               "1m8mOtAjpGErUVJ_5WYqAVCrP6WJUziHj", //irl4
               "11UxxLIESCaMgnK0gl-K9tSjMIsEuRRxs", //irl5
               "1GPlwAVjbtY2nlQXgr3jD7rYJy2x8fLUP", //irl6
               "1K-5_V_8u069TZU7OMhvRRVzJPj-y0OLa", //irl7
               "1HCAeITpewy-Uf94ORHV5XgGsvz0mpfiK", //irl8
               "1c5Oi8p4igrdG4v4Wyw2QTrTU2lU_vxiZ", //irl9
               "1a6iKoORnlL6utnlhbM0NvmHCej6tJtNK", //irl10
               "1QrEVpuJL21adW-CySe46jKUyS6NgaqYv", //irl11
               "1KWLF1fvTLBUICXxTiDVxEUY27FqNHzXy", //irl12
               "1j-24--7kGbXyXEkJS9FmLc3xboVNPeCx", //irl13
               "1jYIlUhY_y-antuVa5Rd9n3iUZSGGJLGR", //irl14
               "1uwqlpt3I6m07I9t7BjCiV37vGeL49Z5D", //irl15
               "11zk8laPIOegwlKYuEsl8RhjhwNYnyUyr", //irl16
               "1UjqrBAVjRwgEEJWu3B3tFbIexeBKz3vv", //irl17
               "1-Ptd1ObWXLZ1jV7nfWmbmAe_03hZVDSg", //irl18
               "1qlE4PQ1iDDQNufjF9HhQY5EaBekox2Vn", //irl19
               "1aXKg7n8q1h3xXHLsV8oN3vam61HbpnNf", //pc
               "17f9NGi_7z0NU1RWSNju08nxit6Qdh2k7", //pc1
               "1PXPETgQJu66xbY8gpipauyl11XhDZ6UF", //pc2
               "1gSMRG5nMvAUFkTEEWxbYc1BXuqMmKngO", //pc3
               "1SeWH5kZca0ritWHElH53ocJqovXoh6xv", //pc4
               "1ywIsW0zO68Zlb8DQNhJWO98DGejQ9sAD", //pc5
               "1lBvrJUvsVKDgAj9Ew2ZenSzVui3JWVdW", //pc6
               "1pPrJMmn6tCQildhUHJrowEXEOPkakRw_", //pc7
               "1ADXzraAFdiUpsSsUJl2I3vnkez3gHyUS", //pc8
               "1qf0eSXNI5MGNSoVYnYWd9FafEss3i2Fr", //pc9
               "1C6D4QDSCL-WZWyCJlifGMPnPC8JjTEvl", //pc10
               "19KQijZY6Wldolwb_0hp_AnR243ydjFN0", //pc11
               "15Li-JlbUG6kWnCOpchu2kSg0QOgL74Q8", //pc12
               "1YLJ6tXfv13NeKDkqKbLUZdSikrf6z-Mx", //pc13
               "1kO2OvhkBHCEVq3l8WldD_RnWmi-wp-2W", //pc14
               "1WrpNxnCiZRXd1n8J52s6YogfaDX45eDe", //pc15
               "1_TwAnQvLP4rrgO7glfBp9_900ALt0zAm", //pc16
               "1l4gi2-3CHe2mfCuzYQqk2v1u7TISweVg", //2 Stars Five Guys
               "1yyRtUj-2jZRPE_uNFgy6b5jBKLOGwFyE", //2 year ago aegyo
               "1NCjEUz_kkwIuYZ-lLI1uqUP2ycPh3F1_", //12ob
               "1nqSL1FU8cLwavvlFgGw2ZmFkRp2t-Rq7", //a strong smell enters boss's nose
               "1Y0bc2ZWgzml_UmyGaUEBFEO07vsH4VOd", //another alarm
               "1kPD63Jm0sEKviaBSW51S_eHKSBD1txYQ", //felix oppar
               "1uZx19l4uqWXkyeab2drf3UbicUpRk3Gp", //finding bug using toonation
               "1Qch0VqAwFlTBde12n_WS4cncrCSJ2O_k", //hajima
               "1f22fz_HzakKaWhZL5wf6fPVE_0REybVH", //Jinri girl cam
               "10X5p4Cg0SgcQ41oB0CWAXqI8C264xEnb", //life is a disaster
               "1BOLxr72oHw5DG6G30QowmQdkLaCRxEss", //Meme Photoshoot! !content
               "1qmL02HAZ1lqGfdpfQflO2d-puGiW_9Bu", //mirrored
               "1AauTuTNWlFzdMWTJxdtR7FysY7Ue2QHk", //pls put on your blinkers
               "1gGWfthMS3V7ltM0OPk0iFbtqespmHiA-", //splits
               "1q84eD7EgdIrPx_Job-wfOgrWkpQVBU07", //what is julia
               "14dr2aI2yzNbqAISX6LEdUY2WycJal8g8", //Why She Does Programming Streams
               "", //
               "", //
               "", //
               
''];
