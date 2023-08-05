<template>
    <div class="task-grid">
        <template v-if="tasks.length">
            <Task 
            v-for="(task, i) in tasks" 
            :key="task.name" 
            :task="task" 
            @taskDeleted="$emit('taskDeleted', i)"
            @taskStateChanged="$emit('taskStateChanged', i)"
             />
        </template>
        <p v-else class="no-task">Nenhuma task</p>
    </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  components: { Task },
  props: {
    tasks: { type: Array, required: true },
  },
};
</script>


<style>
.task-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 30px;
}

.no-task {
    color: #aaa;
    font-size: 1.7rem;
}

</style>
