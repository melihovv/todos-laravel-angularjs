<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskRequest;
use App\Models\Task;
use App\Http\Requests;
use PDOException;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Task::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param TaskRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(TaskRequest $request)
    {
        try {
            Task::create(array_merge($request->all(), ['completed' => false,]));

            return response()->json(['success' => true]);
        } catch (PDOException $e) {
            return response()->json(['error' => 'Could not create task'], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Task $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        return $task;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param TaskRequest $request
     * @param Task $task
     * @return \Illuminate\Http\Response
     */
    public function update(TaskRequest $request, Task $task)
    {
        try {
            $task->update($request->all());

            return response()->json(['success' => true]);
        } catch (PDOException $e) {
            return response()->json(['error' => 'Could not update task'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Task $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        try {
            $task->delete();

            return response()->json(['success' => true]);
        } catch (PDOException $e) {
            return response()->json(['error' => 'Could not delete task'], 500);
        }
    }
}
