import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    recommended : [
        {
        cardImg:"../../desniy/avatarwater_ba4abdd7.png",
        id: 14545454545454544,
        title:"Disney-Pixar _ Win or Lose _ Disney_ Original_yythk"
    },
    {
        cardImg:"../../desniy/cg_disneyplus_ant-manandthewaspquantumania_horizontal_1_e516ac1f.jpg",
        id: 24545454545454544,
        title:"Disney-Pixar _ Win or Lose _ Disney_ Original_yythk"
    },
    {
        cardImg:"../../desniy/cg_disney_elemental_1139_90337d8d.jpg",
        id: 34545454545454544,
        title:"Disney-Pixar _ Win or Lose _ Disney_ Original_yythk"
    },
    {
        cardImg:"../../desniy/cg_disneyplus_americanbornchinese_vol3_1946_a00df2f9.jpg",
        id: 44545454545454544,
        title:"Disney-Pixar _ Win or Lose _ Disney_ Original_yythk"
    },
    
],
    newDisney :  [
        {
        cardImg:"../../desniy/cg_disneyplus_avatarwayofthewater_2048_981cfc3d.jpg",
        id: 54545454545454544,
        title:"Disney-Pixar _ Win or Lose _ Disney_ Original_yythk"
    },
    {
        cardImg:"../../desniy/cg_wdw_summerroomoffer_horizontal_1726_f258d9a4.jpg",
        id: 64545454545454544,
        title:"Disney-Pixar _ Win or Lose _ Disney_ Original_yythk"
    },
    {
        cardImg:"../../desniy/Disney-Kugali _ Iwaju _ Disney_ Original _ poster.jpg",
        id: 74545454545454544,
        title:"Disney-Pixar _ Win or Lose _ Disney_ Original_yythk"
    },
    {
        cardImg:"../../desniy/Disney-Pixar _ Win or Lose _ Disney_ Original_yythk.jpg",
        id: 884545454545454544,
        title:"Disney-Pixar _ Win or Lose _ Disney_ Original_yythk "
    },
    
],
    original :  [
        {
        cardImg:"../../desniy/Doogie Kamealoha_ M.D. Season 2 poster.jpg",
        id: 94545454545454544,
        title:"Disney-Pixar _ Win or Lose _ Disney_ Original_yythk"
    },
    {
        cardImg:"../../desniy/Glee poster.jpg",
        id: 104545454545454544,
        title:"Disney-Pixar _ Win or Lose _ Disney_ Original_yythk"
    },
    {
        cardImg:"../../desniy/Love_ Victor poster.jpg",
        id: 4545454545454544,
        title:"Disney-Pixar _ Win or Lose _ Disney_ Original_yythk"
    },
    {
        cardImg:"../../desniy/make_a_wish_window_reveal_c9609d71.jpg",
        id: 4545454545454544,
        title:"Disney-Pixar _ Win or Lose _ Disney_ Original_yythk"
    },
    
],
    trending :  [
        {
        cardImg:"../../desniy/Marvel _ Jessica Jones _ poster.jpg",
        id: 12854545454545454544,
        title:"Marvel _ Jessica Jones _ poster"
         },
    {
        cardImg:"../../desniy/Marvel Studios _ Agatha_ Coven of Chaos _ Di.jpg",
        id: 445545454545454544,
        title:"Marvel Studios _ Agatha_ Coven of Chaos _ Di"
    },
    {
        cardImg:"../../desniy/Marvel Studios _ Eternals _ movie poster.jpg",
        id: 114545454545454544,
        title:"Marvel Studios _ Eternals _ movie poster"
    },
    {
        cardImg:"../../desniy/Marvel Studios _ Ironheart _ Disney_ Original __yyt.jpg",
        id: 4545454545454544,
        title:"Disney-Pixar _ Win or Lose _ Disney_ Original_yythk"
    },
    
],
    movies: []

};

const moviesSlice = createSlice({
    name : 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            /*state.recommended  = action.payload.recommended ;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;*/
        },
       
    }

})

export const {setMovies} = moviesSlice.actions;

export const selectRecommanded = (state) => state.movies.recommended ;
export const selectNewDisney = (state) => state.movies.newDisney;
export const selectOriginal = (state) => state.movies.original;
export const selectTrending = (state) => state.movies.trending;

export default  moviesSlice.reducer;