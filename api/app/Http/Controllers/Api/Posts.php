<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Posts extends Controller
{
    public function InsertOrder(Request $request)
    {
        $i = 9999;
        $quantity = "null";
        $goodUnits = "null";
        $scrap = "null";

        if(isset($request->initialDate)){
            if(date('Y-m-d H:i:s', strtotime($request->initialDate)) == $request->initialDate) {
                $initialDate = $request->initialDate;
            }else{
                $i = 0;
            }
        }
        if(isset($request->goodUnits)){
            if (preg_match('/^[0-9]*$/', $request->goodUnits)) {
                $goodUnits = $request->goodUnits;
            }else{
                $i = 1;
            }
        }
        if(isset($request->scrap)){
            if (preg_match('/^[0-9]*$/', $request->scrap)) {
                $scrap = $request->scrap;
            }else{
                $i = 2;
            }
        }
        if(isset($request->quantity)){
            if(preg_match("/^[0-9]*$/", $request->quantity)){
                $quantity = $request->quantity;
            }else{
                $i = 3;
            }
        }
        if(isset($request->quantity)){
            if(preg_match("/^[0-9]*$/", $request->quantity)){
                $quantity = $request->quantity;
            }else{
                $i = 3;
            }
        }
        if(isset($request->status)){
            if(preg_match("/^[0-3]{1}$/", $request->status)){
                $status = $request->status;
            }else{
                $i = 4;
            }
        }else{
            $i = 4;
        }

        if (isset($status) and !($i >= 0 && $i <= 4)){
            if (isset($initialDate)){
                $i = 5;
                DB::statement("
                INSERT INTO orders (initialDate, quantity, goodUnits, scrap,status)
                VALUES ('".$initialDate."', ".$quantity.", ".$goodUnits.",".$scrap.",".$status.");"
                );
            }else{
                $i = 5;
                DB::statement("
                INSERT INTO orders (initialDate, quantity, goodUnits, scrap,status)
                VALUES (null, ".$quantity.", ".$goodUnits.",".$scrap.",".$status.");"
                );
            }
        }
        

        switch ($i) {
        case 0:
            $response["status"] = 202;
            $response["msg"] = "La fecha esta incorrecta";
            break;
        case 1:
            $response["status"] = 202;
            $response["msg"] = "El campo GoodUnits debe ser numeros";
            break;
        case 2:
            $response["status"] = 202;
            $response["msg"] = "El campo scrap debe ser numeros";
            break;
        case 3:
            $response["status"] = 202;
            $response["msg"] = "El campo quantity debe ser numeros";
            break;
        case 4:
            $response["status"] = 202;
            $response["msg"] = "Falta el campo status o no es un numero del 1 al 3";
            break;
        case 5:
            $response["status"] = 200;
            $response["msg"] = "Se ha realizado el registro de la orden";
            break;
        }
    
    return response()->json($response);
}

    public function PieceWithoutdefect(Request $request)
    {
        $orderId = $request->orderId;
        $station = $request->station;

        if(!preg_match("/^[0-3]{1}$/",$station)) {
            $response["status"] = 202;
            $response["msg"] = "El numero de estacion debe ser del 1 al 3";
        }else{
            if (preg_match('/^[0-9]*$/', $request->orderId)){
                $check = DB::table('orders')
                ->where('id', $request->orderId)
                ->get();

                if ($check == "[]"){
                    $response["status"] = 202;
                    $response["msg"] = "La orden no existe";
                }else{
                    DB::statement("
                    INSERT INTO units (status, ordersId, stationId)
                    VALUES (1,".$orderId.",".$station.");"
                    );
                    $response["status"] = 202;
                    $response["msg"] = "Se ha registrado la pieza";
                }
            }else{
                $response["status"] = 202;
                $response["msg"] = "La orden debe ser un numero";
            }
            
        }

        return response()->json($response);
    }

    public function PieceWithdefect(Request $request)
    {
        $unitId = $request->unitId;
        $Defect = $request->Defect;

        
        if (preg_match('/^[0-2]{1}$/', $Defect)) {
            if (preg_match('/^[0-9]*$/', $unitId)){
                if ($Defect == 1){
                    $code = 1251;
                }else{
                    $code = 1252;
                }

                $check = DB::select("
                select * from units where 
                status = 2 AND  id = ".$unitId.";
                ");
                if ($check == "[]"){
                    $response["status"] = 202;
                    $response["msg"] = "La pieza no existe o no tiene defecto";
                }else{
                    $checkIfExitsUnit= DB::select("
                    select * from defects where UnitId = ".$unitId.";
                    ;");

                    if (!$checkIfExitsUnit != '[]'){
                        $response["status"] = 202;
                        $response["msg"] = "La pieza ya tiene defecto";
                    }else{
                        if($code == 1251){
                            DB::statement("
                            INSERT INTO defects (code, tittle, UnitId)
                            VALUES (".$code.",'Metrica no lograda', ".$unitId."); "
                            );
                            $response["status"] = 202;
                            $response["msg"] = "Se ha registrado la pieza con defecto";
                            }else{
                                DB::statement("
                                INSERT INTO defects (code, tittle, UnitId)
                                VALUES (".$code.",'Pieza faltante', ".$unitId."); "
                                );
                                $response["status"] = 202;
                                $response["msg"] = "Se ha registrado la pieza con defecto";  
                            }
                    }
                }
            }
            else{
                $response["status"] = 202;
                $response["msg"] = "UnitId debe ser numero";
            }
        }else{
            $response["status"] = 202;
            $response["msg"] = "El numero de defecto de ser 1 o 2";
            
        }
        return response()->json($response);
    }
    public function UpdateOrder(Request $request, $id){

            if(preg_match("/^[0-3]{1}$/", $request->status)){
                if (preg_match('/^[0-9]*$/', $request->goodUnits)){
                    if (preg_match('/^[0-9]*$/', $request->scrap)){

                        $check = DB::table('orders')
                        ->where('id', $id)
                        ->get();

                        if ($check == "[]"){
                            $response["status"] = 202;
                            $response["msg"] = "La orden no existe";
                        }else{
                           
                            //return $quantity;
                            if($check[0]->quantity < ($request->goodUnits+$request->scrap)){
                                $response["status"] = 202;
                                $response["msg"] = "GoodUnits y scrap no deben ser mayores a quantity";
                            }else{
                                DB::statement("
                                UPDATE orders
                                SET goodUnits= ".$request->goodUnits.", scrap = ".$request->scrap.", status = ".$request->status."
                                WHERE id =".$id."; "
                                );
                                $response["status"] = 200;
                                $response["msg"] = "Se ha actualizado la orden";
                            }
                        }
                        
                    }else{
                        $response["status"] = 202;
                        $response["msg"] = "Scrap debe ser un numero";
                    }
                }
                else{
                    $response["status"] = 202;
                    $response["msg"] = "GoodUnits debe ser un numero";
                }
            }else{
                $response["status"] = 202;
                $response["msg"] = "El numero status debe ser del 1 al 3";
            }
            return response()->json($response);
    }

}
