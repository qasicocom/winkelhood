<table class="table table-striped {{ $class }}">
    <colgroup>
        @for ($i = 0; $i < count($columns); $i++)
        <col class="con{{ $i }}" />
        @endfor
    </colgroup>
    <thead>
    <tr>
        @foreach($columns as $i => $c)
        <th align="center" valign="middle" class="head{{ $i }}" 
            @if ($c == 'checkbox')
                style="width:15px"            
            @endif
        >
            @if ($c == 'checkbox' && $hasCheckboxes = true)
            	<label class="checkbox-inline px-single">
               		<input type="checkbox" class="selectAll px"/>
                	<span class="lbl"></span>
                </label>
            @else
                {{ $c }}
            @endif
        </th>
        @endforeach
    </tr>
    </thead>
    <tbody>
    @foreach($data as $d)
    <tr>
        @foreach($d as $dd)
        <td>{{ $dd }}</td>
        @endforeach
    </tr>
    @endforeach
    </tbody>
</table>
