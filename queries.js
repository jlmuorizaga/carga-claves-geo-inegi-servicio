const Pool = require("pg").Pool;

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT,
} = require("./conexion_data_db.js");

//Pool de conexiones a base de datos
const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  /*ssl: {
    rejectUnauthorized: false,
  },*/
});

const insertaMgee = (req, res) => {
  /*   const { cvegeo, cve_ent, nomgeo,nom_abrev, pob_total,pob_femenina,pob_masculina,total_viviendas_habitadas} = req.body;
     console.log('cve_geo=',cvegeo);console.log('cve_ent=',cve_ent),console.log('nomgeo=',nomgeo)
     console.log('nom_abrev=',nom_abrev),console.log('pob_total=',pob_total),console.log('pob_femenina=',pob_femenina)
     console.log('pob_masculina=',pob_masculina),console.log('total_viviendas_habitadas=',total_viviendas_habitadas)
 */
  pool.query(
    "INSERT INTO public.mgee(cvegeo, cve_ent, nomgeo, nom_abrev, pob_total, pob_femenina, pob_masculina, total_viviendas_habitadas) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;",
    [cvegeo, cve_ent, nomgeo, nom_abrev, pob_total, pob_femenina, pob_masculina, total_viviendas_habitadas],
    (error, results) => {
      if (error) {
        throw error;
      } clearImmediate
      textoRespuesta =
        '{"respuesta": "Se insertó nuevo registro en mgee' +
        results.rows[0].cvegeo +
        '"}';
      res.status(201).json(JSON.parse(textoRespuesta));
    }
  );
};


const insertaMgem = (req, res) => {
  const { cvegeo, cve_ent, cve_mun, nomgeo, cve_cab, pob_total, pob_femenina, pob_masculina, total_viviendas_habitadas } = req.body;
  /*  console.log('cve_geo=',cvegeo);console.log('cve_ent=',cve_ent),console.log('cve_mun=',cve_mun),
    console.log('nomgeo=',nomgeo), console.log('cve_cab=',cve_cab),console.log('pob_total=',pob_total),
    console.log('pob_femenina=',pob_femenina), console.log('pob_masculina=',pob_masculina),
    console.log('total_viviendas_habitadas=',total_viviendas_habitadas)
   */ pool.query(
    "INSERT INTO public.mgem(cvegeo, cve_ent, cve_mun, nomgeo, cve_cab, pob_total, pob_femenina, "
    + "pob_masculina, total_viviendas_habitadas) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;",
    [cvegeo, cve_ent, cve_mun, nomgeo, cve_cab, pob_total, pob_femenina, pob_masculina, total_viviendas_habitadas],
    (error, results) => {
      if (error) {
        throw error;
      } clearImmediate
      textoRespuesta =
        '{"respuesta": "Se insertó nuevo registro en mgem' +
        results.rows[0].cvegeo +
        '"}';
      res.status(201).json(JSON.parse(textoRespuesta));
    }
  );
};

const insertaLocalidad = (req, res) => {
  const { cvegeo, cve_ent, cve_mun, cve_loc, nomgeo, ambito, latitud, longitud, altitud,
    pob_total, total_viviendas_habitadas, cve_carta, estatus, periodo } = req.body;
 /*     console.log('cve_geo=',cvegeo);console.log('cve_ent=',cve_ent);console.log('cve_mun=',cve_mun);
      console.log('cve_loc=',cve_loc); console.log('nomgeo=',nomgeo);console.log('ambito=',ambito);
      console.log('latitud=',latitud); console.log('longitud=',longitud);
      console.log('altitud=',altitud); console.log('pob_total=',pob_total);console.log('total_viviendas_habitadas=',total_viviendas_habitadas);
      console.log('cve_carta=',cve_carta); console.log('estatus=',estatus); console.log('periodo=',periodo);
  */  pool.query(
      "INSERT INTO public.localidades(cvegeo, cve_ent, cve_mun, cve_loc, nomgeo, ambito, latitud, longitud, altitud, "
      + "pob_total, total_viviendas_habitadas, cve_carta, estatus, periodo)	"
      + "VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;",
      [cvegeo, cve_ent, cve_mun, cve_loc, nomgeo, ambito, latitud, longitud, altitud,
        pob_total, total_viviendas_habitadas, cve_carta, estatus, periodo],
      (error, results) => {
        if (error) {
          throw error;
        } clearImmediate
        textoRespuesta =
          '{"respuesta": "Se insertó nuevo registro en localidades ' +
          results.rows[0].cvegeo +
          '"}';
        res.status(201).json(JSON.parse(textoRespuesta));
      }
    );
};



module.exports = {
  insertaMgee,
  insertaMgem,
  insertaLocalidad
};