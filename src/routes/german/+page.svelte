<script lang="ts">
	let verb = ""
</script>

<svelte:head>
	<title>LTS20050703 / German</title>
</svelte:head>

<input class="input input-primary" type="text" placeholder="Verb" bind:value={verb} />

<table class="table">
	<thead><th>Pronoun</th><th>Verb</th></thead>
	<tbody>
		<tr><td>Ich</td><td> {verb.slice(0, -1)}</td> </tr>
		<tr
			><td>Du</td><td
				>{verb.slice(0, -2) + `${verb.at(-3) === "ß" || verb.at(-3) === "s" ? "" : "s"}t`}</td
			>
		</tr>
		<tr><td>Er/sie/es</td><td> {verb.slice(0, -2) + "t"}</td> </tr>
		<tr><td>Wir</td><td> {verb}</td></tr>
		<tr><td>Ihr</td><td> {verb.slice(0, -2) + "t"}</td></tr>
		<tr><td>Sie/sie</td><td> {verb}</td></tr>
	</tbody>
</table>
<br />

<h1>Wer nicht fragt, bleib immer dumm</h1>
<h3>If you don&#39;t ask, you&#39;ll always be stupid</h3>
<hr />
<ol>
	<li>
		Nomen / Noun:
		<ol>
			<li>Always capitalize the first character.</li>
			<li><a href="https://reddit.com/r/pointlesslygendered">r/pointlesslygendered</a></li>
		</ol>
	</li>
	<li>
		Verb:
		<ol>
			<li>Always ends with &quot;-en&quot;</li>
			<li>konjugieren / luôn chia</li>
			<li>Position: Always follow the subject (see [[#Sentence structure]])</li>
		</ol>
	</li>
	<li>
		Aussprache / Pronunciation
		<ol>
			<li>Pronounce <em>almost</em> always how you read</li>
			<li>
				Always stress on the first syllable <strong>EXCEPTION APPLIES UGH I HATE LANGUAGES</strong>
			</li>
		</ol>
	</li>
</ol>
<h2>Đại từ nhân xưng</h2>
<table>
	<thead>
		<tr>
			<th>German</th>
			<th>English</th>
			<th>sein / to be</th>
			<th>werden / will</th>
			<th>haben / have</th>
			<th>endings</th>
		</tr>
	</thead>
	<tbody
		><tr>
			<td><strong>Singular</strong></td>
			<td>---</td>
			<td>---</td>
			<td>---</td>
			<td>---</td>
			<td></td>
		</tr>
		<tr>
			<td>Ich</td>
			<td>I</td>
			<td>bin</td>
			<td>werde</td>
			<td>hab<strong>e</strong></td>
			<td>e</td>
		</tr>
		<tr>
			<td>Du</td>
			<td>You</td>
			<td>bist</td>
			<td>wirst</td>
			<td>ha<strong>st</strong></td>
			<td>st</td>
		</tr>
		<tr>
			<td>Er/sie/es</td>
			<td>He/She/It</td>
			<td>ist</td>
			<td>wird</td>
			<td>ha<strong>t</strong></td>
			<td>t</td>
		</tr>
		<tr>
			<td>---</td>
			<td>---</td>
			<td>---</td>
			<td>---</td>
			<td>---</td>
			<td></td>
		</tr>
		<tr>
			<td><strong>Plural</strong></td>
			<td>----</td>
			<td>---</td>
			<td>---</td>
			<td>---</td>
			<td></td>
		</tr>
		<tr>
			<td>Wir</td>
			<td>We</td>
			<td>sind</td>
			<td>werden</td>
			<td>hab<strong>en</strong></td>
			<td>en</td>
		</tr>
		<tr>
			<td>Ihr</td>
			<td>You (plural)</td>
			<td>seid</td>
			<td>werdet</td>
			<td>hab<strong>t</strong></td>
			<td>t</td>
		</tr>
		<tr>
			<td><strong>S</strong>ie/sie</td>
			<td>Formal/Polite He/She / They</td>
			<td>sind</td>
			<td>werden</td>
			<td>hab<strong>en</strong></td>
			<td>en</td>
		</tr>
	</tbody>
</table>
<p>
	Of course it wouldn&#39;t be german if there&#39;s no exception. See exception in [[#Important
	note on words that ends with &quot;-sen&quot;]]
</p>
<hr />
<h2>Sentence structure</h2>
<h3>subject + verb + object</h3>
<p>For Example: Ich bin LTS Er ist Fale Sie ist ... Wir sind D6</p>
<hr />
<table>
	<thead>
		<tr>
			<th>German</th>
			<th>English</th>
			<th>kommen / come</th>
			<th>lernen / learn</th>
			<th>studieren / study</th>
			<th>kochen / cook</th>
			<th>spielen / play</th>
		</tr>
	</thead>
	<tbody
		><tr>
			<td><strong>Singular</strong></td>
			<td>---</td>
			<td>---</td>
			<td>---</td>
			<td>---</td>
			<td>---</td>
			<td></td>
		</tr>
		<tr>
			<td>Ich</td>
			<td>I</td>
			<td>komme</td>
			<td>lerne</td>
			<td>studiere</td>
			<td>koche</td>
			<td>spiele</td>
		</tr>
		<tr>
			<td>Du</td>
			<td>You</td>
			<td>kommst</td>
			<td>lernst</td>
			<td>studierst</td>
			<td>kochst</td>
			<td>spielst</td>
		</tr>
		<tr>
			<td>Er/sie/es</td>
			<td>He/She/It</td>
			<td>kommt</td>
			<td>lernt</td>
			<td>studiert</td>
			<td>kocht</td>
			<td>spielt</td>
		</tr>
		<tr>
			<td>---</td>
			<td>---</td>
			<td>---</td>
			<td>---</td>
			<td>---</td>
			<td>---</td>
			<td></td>
		</tr>
		<tr>
			<td><strong>Plural</strong></td>
			<td>----</td>
			<td>---</td>
			<td>---</td>
			<td>---</td>
			<td>---</td>
			<td></td>
		</tr>
		<tr>
			<td>Wir</td>
			<td>We</td>
			<td>kommen</td>
			<td>lernen</td>
			<td>studieren</td>
			<td>kochen</td>
			<td>spielen</td>
		</tr>
		<tr>
			<td>Ihr</td>
			<td>You (plural)</td>
			<td>kommt</td>
			<td>lernt</td>
			<td>studiert</td>
			<td>kocht</td>
			<td>spielt</td>
		</tr>
		<tr>
			<td><strong>S</strong>ie/sie</td>
			<td>Formal/Polite He/She / They</td>
			<td>kommen</td>
			<td>lernen</td>
			<td>studieren</td>
			<td>kochen</td>
			<td>spielen</td>
		</tr>
	</tbody>
</table>
<p>
	Entschuldigund Ich komme später = Sorry I come late Sie learnt Deutsch = She learn German Wir
	studieren CSE = We study CSE Du kochst Spatghetti = You cook spat Ihr spielt Games = You (plural)
	play games
</p>
<hr />
<p>
	Hallo = Hello Guten Morgen = Good Morning Guten Tag (more like Guthen Thag ugh) = Good Afternoon
	(not really, it&#39;s more like Good Whatever time of the day) Guten Abend = Good Evening Guten
	Nacht = Good Night
</p>
<p>%%</p>
<h3>München</h3>
<p>Grüß Gott Moin Moin Servus</p>
<p>%%</p>
<hr />
<p>Tschüss = bye Auf Wiedersehen = Goodbye (Polite/Formal) Ciao = uhh bye v2?</p>
<p>
	Entschuldigung = sorry Es tut mir leid = sorry v2 Danke schön = Thank you Vielen Dank = Thank you
	so much heiße = name?
</p>
<h3>Important note on words that ends with &quot;-sen&quot;</h3>
<p>Note the Du and Er/sie/es part</p>
<table>
	<thead>
		<tr>
			<th>German</th>
			<th>English</th>
			<th>heiße / heissen</th>
		</tr>
	</thead>
	<tbody
		><tr>
			<td><strong>Singular</strong></td>
			<td>---</td>
			<td>---</td>
		</tr>
		<tr>
			<td>Ich</td>
			<td>I</td>
			<td>heiße</td>
		</tr>
		<tr>
			<td>Du</td>
			<td>You</td>
			<td><del>heiß<strong>s</strong>t</del> heißt</td>
		</tr>
		<tr>
			<td>Er/sie/es</td>
			<td>He/She/It</td>
			<td><del>heiß<strong>s</strong>t</del> heißt</td>
		</tr>
		<tr>
			<td>---</td>
			<td>---</td>
			<td>---</td>
		</tr>
		<tr>
			<td><strong>Plural</strong></td>
			<td>----</td>
			<td>---</td>
		</tr>
		<tr>
			<td>Wir</td>
			<td>We</td>
			<td>heißen</td>
		</tr>
		<tr>
			<td>Ihr</td>
			<td>You (plural)</td>
			<td><del>heiß<strong>s</strong>t</del> heißt</td>
		</tr>
		<tr>
			<td><strong>S</strong>ie/sie</td>
			<td>Formal/Polite He/She / They</td>
			<td>heißen</td>
		</tr>
	</tbody>
</table>
<p>Ich bin LTS = Ich heiße LTS = I am LTS</p>
<p>
	Mein Name ist LTS = My name is LTS Ich studiere CSE = I study CSE Ich komme aus Vietnam = I come
	from Vietnam Ich wohne in ... = I live in...
</p>
<p>
	Wie heißt du? = How are you called? Wie ist dein Name? = How&#39;s your name? (Epic
	mistranslation)
</p>
<p>
	Was studierst du? = What do you study Woher kommst du? = Where do you come from Wo wohnst du? =
	Where do you live
</p>
