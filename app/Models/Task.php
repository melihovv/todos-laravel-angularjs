<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Task
 *
 * @property integer $id
 * @property string $title
 * @property integer $priority
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Task whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Task whereTitle($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Task wherePriority($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Task whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Task whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property boolean $completed
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Task whereCompleted($value)
 */
class Task extends Model
{
    protected $fillable = [
        'title', 'priority', 'completed',
    ];

    protected $hidden = [
        'created_at', 'updated_at',
    ];

    protected $casts = [
        'completed' => 'boolean',
    ];
}
